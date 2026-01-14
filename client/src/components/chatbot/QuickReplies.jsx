export default function QuickReplies({ replies, onSelect }) {
  return (
    <div className="px-4 py-2 flex gap-2 overflow-x-auto bg-gray-50 border-t">
      {replies.map((reply, i) => (
        <button
          key={i}
          onClick={() => onSelect(reply)}
          className="flex-shrink-0 px-3 py-1.5 text-xs bg-white border border-spa-green-500 text-spa-green-500 rounded-full hover:bg-spa-green-50 transition-colors"
        >
          {reply}
        </button>
      ))}
    </div>
  );
}
