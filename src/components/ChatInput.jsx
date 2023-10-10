import React, { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

export const ChatInput = ({ onSendMessage }) => {
    const [screen, setScreen] = useState("");

     const handleSubmit = (e) => {
       e.preventDefault();
       if (screen.trim()) {
         onSendMessage(screen);
         setScreen("");
       }
     };
  return (
    <form className="flex justify-center relative" onSubmit={handleSubmit}>
      <input
        className="rounded-2xl h-[30px] text-[7px] w-[210px] px-4"
        type="text"
        placeholder="Type a message…"
        value={screen}
        onChange={(e) => setScreen(e.target.value)}
      />
      <button className="absolute top-[3px] right-1 w-[25px] text-2xl bg-bgButton rounded-full text-white flex justify-center items-center font-bold">
        <RiArrowRightSLine />
      </button>
    </form>
  );
};
