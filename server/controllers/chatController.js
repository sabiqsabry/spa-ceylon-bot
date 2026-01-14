const Anthropic = require('@anthropic-ai/sdk');
const systemPrompt = require('../data/systemPrompt');

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Store conversation history per session (in production, use Redis/database)
const conversationHistory = new Map();

const chatController = {
  async sendMessage(req, res) {
    try {
      const { message, sessionId } = req.body;

      if (!message) {
        return res.status(400).json({ error: 'Message is required' });
      }

      if (!sessionId) {
        return res.status(400).json({ error: 'Session ID is required' });
      }

      // Get or create conversation history for this session
      if (!conversationHistory.has(sessionId)) {
        conversationHistory.set(sessionId, []);
      }
      const history = conversationHistory.get(sessionId);

      // Add user message to history
      history.push({ role: 'user', content: message });

      // Keep only last 20 messages to manage context window
      const recentHistory = history.slice(-20);

      // Call Claude API
      const response = await anthropic.messages.create({
        model: 'claude-sonnet-4-5-20250929',
        max_tokens: 1024,
        system: systemPrompt,
        messages: recentHistory,
      });

      const assistantMessage = response.content[0].text;

      // Add assistant response to history
      history.push({ role: 'assistant', content: assistantMessage });

      res.json({
        success: true,
        message: assistantMessage,
        sessionId,
      });
    } catch (error) {
      console.error('Chat error:', error);
      res.status(500).json({
        error: 'Failed to process message',
        details: error.message,
      });
    }
  },

  clearHistory(req, res) {
    try {
      const { sessionId } = req.body;
      if (sessionId && conversationHistory.has(sessionId)) {
        conversationHistory.delete(sessionId);
        res.json({ success: true, message: 'Conversation cleared' });
      } else {
        res.json({ success: true, message: 'No conversation to clear' });
      }
    } catch (error) {
      console.error('Clear history error:', error);
      res.status(500).json({
        error: 'Failed to clear conversation',
        details: error.message,
      });
    }
  },
};

module.exports = chatController;
