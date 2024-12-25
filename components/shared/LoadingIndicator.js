export function LoadingIndicator() {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
    </div>
  )
} 