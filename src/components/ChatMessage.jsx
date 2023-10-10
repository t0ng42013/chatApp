import React, {useEffect, useRef } from "react";

function ChatMessages({ chat }) {
  const chatContainerRef = useRef(null); 
  
  useEffect(() => {
    // Desplazar el chat hacia abajo cada vez que el estado de chat cambia
    chatContainerRef.current.scrollIntoView({ behavior: "smooth" });
  }, [chat]);
 
  return (
    <div className="overflow-y-auto p-2">
      {chat.map((message, index) => (
        <p
          key={index}
          className="w-[130px] min-h-[32px] text-[7px] text-chatLeft bg-bgChatLeft font-bold p-2 mb-2 rounded-lg break-words"
        >
          {message}
        </p>
      ))}
      <div ref={chatContainerRef}></div>
    </div>
  );
}

export default ChatMessages;
