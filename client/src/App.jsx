import ChatWidget from './components/chatbot/ChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Demo content to show the widget floats above */}
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Spa Ceylon Website</h1>
        <p className="text-gray-600 mb-8">
          This is demo content to show that the chatbot widget floats above the page content.
          Scroll down to see more content...
        </p>
        <div className="space-y-4">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Section {i + 1}</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. The chatbot widget should 
                remain visible in the bottom-right corner as you scroll through this content.
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Chat Widget - Floats above everything */}
      <ChatWidget />
    </div>
  );
}

export default App;
