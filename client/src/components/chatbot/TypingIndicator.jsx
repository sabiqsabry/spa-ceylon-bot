import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export default function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex justify-start"
    >
      <div className="bg-white p-3 rounded-2xl rounded-bl-md shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 text-spa-green-500">
          <Loader2 size={16} className="animate-spin" />
          <span className="text-sm">Thinking...</span>
        </div>
      </div>
    </motion.div>
  );
}
