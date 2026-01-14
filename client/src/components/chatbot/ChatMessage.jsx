import { motion } from 'framer-motion';

export default function ChatMessage({ message }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[85%] p-3 rounded-2xl ${
          message.role === 'user'
            ? 'bg-spa-green-500 text-white rounded-br-md'
            : 'bg-white text-gray-800 rounded-bl-md shadow-sm border border-gray-100'
        }`}
      >
        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
      </div>
    </motion.div>
  );
}
