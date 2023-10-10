
import React, { useState } from "react";

import dogImage1 from "/src/assets/dog-image-1.jpg";
import dogImage2 from "/src/assets/dog-image-2.jpg";
import dogImage3 from "/src/assets/dog-image-3.jpg";
import { ChatDescription } from "./components/ChatDescription";
import { ChatInput } from "./components/ChatInput";
import { ChatHeader } from "./components/ChatHeader";
import ChatMessages from "./components/ChatMessage";


function App() {
  const [chat, setChat] = useState([]);

   const addMessage = (message) => {
     setChat([...chat, message]);
   };

  
  return (
    <div className="w-screen  h-screen flex items-center relative max-w-[2000px] mx-auto">
      <div className="w-[50%] max-w-[430px]  h-full absolute left-0 overflow-hidden">
        <span className="w-[130%]  absolute top-0 -left-36 h-[60%] lg:h-[85%] bg-gradient-to-br from-degLightMagenta to-degLightViolet  block rounded-b-[300px] z-0"></span>
      </div>
      <div className="w-[50%] max-w-[430px]  h-[60%] lg:h-full absolute bottom-0 right-0 overflow-hidden ">
        <span className="w-[130%]  absolute bottom-0 -right-36 h-[85%] bg-[#F7F5FA] block rounded-t-[300px] z-0"></span>
      </div>
      <section className=" lg:ml-[290px] w-[960px] h-[630px] flex  justify-center items-center  flex-col lg:flex-row">
      
      
        <div className=" border shadow-md shadow-slate-600 bg-white border-e-blue-500 w-[250px] h-[500px] p-3 rounded-[32px] z-10">
          <div className="bg-bgApp w-full h-full rounded-[22px] overflow-hidden relative">
            
            {/* header */}
            <ChatHeader></ChatHeader>

            <div className=" overflow-y-auto p-2">
              {/* screen */}

              <div className="overflow-y-auto h-[360px]">
                <p className=" w-[130px] h-[32px] text-[7px] text-chatLeft bg-bgChatLeft font-bold p-2 mb-2 rounded-lg">
                  That sounds great. I’d be happy with that.
                </p>
                <p className=" w-[130px] h-[32px] text-[7px] text-chatLeft bg-bgChatLeft font-bold p-2 mb-2 rounded-lg">
                  Could you send over some pictures of your dog, please?
                </p>
                <div className="flex ml-auto mt-4 mb-2 w-[70%] overflow-hidden">
                  <img
                    className="w-11 ml-1 rounded-md"
                    src={dogImage2}
                    alt="perro"
                  />
                  <img
                    className="w-11 ml-1 rounded-md"
                    src={dogImage1}
                    alt="perro"
                  />
                  <img
                    className="w-11 ml-1 rounded-md"
                    src={dogImage3}
                    alt="perro"
                  />
                </div>
                <p className="  w-[130px] h-[32px] text-[7px] text-chatRight bg-white ml-auto font-bold p-2 mb-2 rounded-lg">
                  Here are a few pictures. She’s a happy girl!
                </p>
                <p className=" table text-[7px] text-chatRight bg-white ml-auto font-bold p-2 mb-2 rounded-lg">
                  Can you make it?
                </p>

                <p className=" w-[130px] h-[45px] text-[7px] text-chatLeft bg-bgChatLeft font-bold p-2 mb-2 rounded-lg">
                  She looks so happy! The time we discussed works. How long
                  shall I take her out for?
                </p>

                <div className="bg-gradient-to-r p-2 rounded-xl rounded-bl-sm from-degLightMagenta to-degLightViolet w-[160px] h-[32px] text-[7px] text-white flex items-center justify-between mb-2">
                  <div className="w-[90px] flex justify-start items-center">
                    <span className="w-4 h-4 border-2 mr-1 rounded-full">
                      {" "}
                    </span>
                    30 minute walk
                  </div>
                  <span className="text-white font-bold text-xs ml-4">$29</span>
                </div>
                <div className="bg-gradient-to-r p-2 rounded-xl rounded-bl-sm from-degLightMagenta to-degLightViolet w-[160px] h-[32px] text-[7px] text-white flex items-center justify-between mb-2">
                  <div className="w-[90px] flex justify-start items-center">
                    <span className="w-4 h-4 border-2 mr-1 rounded-full">
                      {" "}
                    </span>
                    1 hour walk
                  </div>
                  <span className="text-white font-bold text-xs ml-4">
                    {" "}
                    $49
                  </span>
                </div>

                {/* Renderizar mensajes del array chat usando map */}
                
                <ChatMessages chat={chat}/>
              </div>

             <ChatInput onSendMessage={addMessage}/>
            </div>
          </div>
        </div>

        <ChatDescription />
      </section>
    </div>
  );
}

export default App
