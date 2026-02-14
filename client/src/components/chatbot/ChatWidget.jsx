import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Smile } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'assistant',
      content: "Hello! Welcome to Spa Ceylon. How may I assist you on your journey to wellness today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => uuidv4());
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes.toString().padStart(2, '0');
    return `${displayHours}:${displayMinutes} ${ampm}`;
  };

  const sendMessage = async (text = inputValue) => {
    if (!text.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: text.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await axios.post(`${API_URL}/chat/message`, {
        message: text.trim(),
        sessionId,
      });

      const botMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: response.data.message,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Failed to send message:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: 'assistant',
          content: "I apologize, but I'm having trouble connecting right now. Please try again in a moment, or contact us directly at 077 659 5757.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button (FAB) - When Closed */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-[#1A5F4A] hover:bg-[#145242] text-white rounded-full shadow-2xl flex items-center justify-center transition-colors"
          >
            <MessageCircle size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window - When Open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-6 right-6 z-[9999] w-[380px] h-[600px] max-h-[calc(100vh-3rem)] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden"
            style={{
              maxWidth: 'calc(100vw - 3rem)',
            }}
          >
            {/* Header Bar */}
            <div className="bg-[#1A5F4A] h-[70px] px-4 flex items-center justify-between shadow-md relative z-10">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                {/* Bot Avatar */}
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🪷</span>
                </div>
                
                {/* Bot Name & Status */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-white font-semibold text-base">Spa Ceylon</h3>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#22C55E]"></div>
                    <span className="text-xs text-white/80">Online</span>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors flex-shrink-0"
              >
                <X size={20} className="text-white" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto bg-[#ECE5DD] p-4 space-y-2 relative chat-messages">
              {/* Subtle pattern overlay */}
              <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30 Q45 15 60 30 Q45 45 30 30' fill='none' stroke='%23000' stroke-width='1'/%3E%3C/svg%3E")`,
                  backgroundSize: '60px 60px',
                }}
              ></div>

              <div className="relative z-10">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} mb-2`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-3 py-2 ${
                        msg.role === 'user'
                          ? 'bg-[#DCF8C6] text-[#111827] rounded-br-sm'
                          : 'bg-white text-[#111827] rounded-bl-sm shadow-sm'
                      }`}
                    >
                      {msg.role === 'user' ? (
                        <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                          {msg.content}
                        </p>
                      ) : (
                        <div className="text-sm leading-relaxed break-words chat-markdown">
                          <ReactMarkdown
                            components={{
                              h2: ({ children }) => (
                                <p className="font-bold text-[13px] text-[#1A5F4A] mt-4 mb-1.5 first:mt-0">{children}</p>
                              ),
                              h3: ({ children }) => (
                                <p className="font-semibold text-[13px] mt-3 mb-1 first:mt-0">{children}</p>
                              ),
                              strong: ({ children }) => (
                                <span className="font-semibold">{children}</span>
                              ),
                              ul: ({ children }) => (
                                <ul className="my-1.5 ml-1 space-y-1.5">{children}</ul>
                              ),
                              ol: ({ children }) => (
                                <ol className="my-1.5 space-y-1.5">{children}</ol>
                              ),
                              li: ({ children }) => (
                                <li className="text-sm leading-relaxed flex gap-1.5 items-start">
                                  <span className="text-[#1A5F4A] mt-[1px] shrink-0">•</span>
                                  <span className="flex-1">{children}</span>
                                </li>
                              ),
                              p: ({ children }) => (
                                <p className="mb-3 last:mb-0">{children}</p>
                              ),
                              hr: () => (
                                <hr className="my-3 border-gray-200" />
                              ),
                              a: ({ href, children }) => (
                                <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#1A5F4A] underline">{children}</a>
                              ),
                            }}
                          >
                            {msg.content}
                          </ReactMarkdown>
                        </div>
                      )}
                      <div className={`flex items-center gap-1 mt-1 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <span className="text-[10px] text-[#6B7280]">
                          {formatTime(msg.timestamp)}
                        </span>
                        {msg.role === 'user' && (
                          <svg width="12" height="12" viewBox="0 0 16 15" className="ml-0.5">
                            <path
                              d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.175a.366.366 0 0 0-.063-.51zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.175a.365.365 0 0 0-.063-.51z"
                              fill="#4A9EFF"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start mb-2"
                  >
                    <div className="bg-white rounded-2xl rounded-bl-sm shadow-sm px-4 py-3">
                      <div className="flex items-center gap-1">
                        <motion.div
                          className="w-2 h-2 bg-[#6B7280] rounded-full"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-[#6B7280] rounded-full"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-[#6B7280] rounded-full"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input Area */}
            <div className="bg-[#F0F0F0] p-3 border-t border-gray-200">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
                className="flex items-center gap-2"
              >
                {/* Emoji Button */}
                <button
                  type="button"
                  className="w-9 h-9 rounded-full hover:bg-gray-200 flex items-center justify-center transition-colors flex-shrink-0"
                >
                  <Smile size={20} className="text-gray-500" />
                </button>

                {/* Text Input */}
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2.5 bg-white rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#1A5F4A]/20 text-[#111827] placeholder:text-[#6B7280]"
                  disabled={isLoading}
                />

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="w-10 h-10 bg-[#1A5F4A] hover:bg-[#145242] disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-105 active:scale-95 flex-shrink-0"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
