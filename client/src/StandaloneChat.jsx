import ChatWidget from './components/chatbot/ChatWidget';

function StandaloneChat() {
  return (
    <div className="min-h-screen bg-spa-cream flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-display font-bold text-spa-green-700 mb-2">
            Spa Ceylon AI Chatbot
          </h1>
          <p className="text-gray-600">
            Standalone chatbot interface - Click the button in the bottom right to start chatting
          </p>
        </div>
      </div>
      
      {/* Chatbot Widget - Always visible */}
      <ChatWidget />
    </div>
  );
}

export default StandaloneChat;
