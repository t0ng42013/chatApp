
import React, { useState, useEffect, useRef } from "react";
import { RiArrowDropLeftLine, RiArrowRightSLine } from "react-icons/ri";
import { HiEllipsisVertical } from "react-icons/hi2";


function App() {
  const [screen, setScreen] = useState("");
  const [chat, setChat] = useState([]);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Desplazar el chat hacia abajo cada vez que el estado de chat cambia
    chatContainerRef.current.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const formChat = (e) => {
    e.preventDefault();
    if (!screen.length) return;
    setChat([...chat, screen]); // Agrega el mensaje del estado screen al array de chat
    setScreen(""); // Limpia el estado screen después de agregar el mensaje al chat
  };

  const onChangeMessage = (e) => {
    setScreen(e.target.value);
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
        {/* diseño mobile */}
        <div className=" border shadow-md shadow-slate-600 bg-white border-e-blue-500 w-[250px] h-[500px] p-3 rounded-[32px] z-10">
          <div className="bg-bgApp w-full h-full rounded-[22px] overflow-hidden relative">
            {/* header */}
            <div className="w-full h-[70px] bg-gradient-to-r from-degLightViolet to-degLightMagenta rounded-b-md ">
              <span className="absolute -translate-y-1/2 left-1/2  -translate-x-1/2 mx-auto w-[130px] h-[40px]  bg-white block rounded-[22px]"></span>
              <div className="h-[100%] w-full flex justify-between pt-6 px-1">
                <button className="text-white font-bold p-0 text-4xl">
                  <RiArrowDropLeftLine />
                </button>
                <div className=" h-full w-full flex items-center">
                  <figure className="overflow-hidden w-[30px] h-[30px] rounded-full border-2">
                    <img src="./src/assets/avatar.jpg" alt="foto avatar" />
                  </figure>
                  <div className="h-full text-white  px-2 pt-1">
                    <h2 className="text-xs font-semibold">Samuel Green </h2>
                    <p className="text-[8px] text-placeholderText">
                      Available to Walk
                    </p>
                  </div>
                </div>
                <button className="text-white text-2xl">
                  <HiEllipsisVertical />
                </button>
              </div>
            </div>
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
                    src="./src/assets/dog-image-2.jpg"
                    alt="perro"
                  />
                  <img
                    className="w-11 ml-1 rounded-md"
                    src="./src/assets/dog-image-1.jpg"
                    alt="perro"
                  />
                  <img
                    className="w-11 ml-1 rounded-md"
                    src="./src/assets/dog-image-3.jpg"
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

              <form
                onClick={(e) => formChat(e)}
                className="flex justify-center relative"
              >
                <input
                  className="rounded-2xl h-[30px] text-[7px] w-[210px] px-4"
                  type="text"
                  placeholder="Type a message…"
                  value={screen}
                  onChange={(e) => onChangeMessage(e)}
                />
                <button className="absolute top-[3px] right-1 w-[25px] text-2xl bg-bgButton rounded-full text-white flex justify-center items-center font-bold">
                  <RiArrowRightSLine />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="lg:mx-[100px] w-full h-[250px] p-5 z-10 text-center max-w-[360px] lg:text-start lg:max-w-[500px]">
          <h1 className=" text-4xl font-bold mb-8">Simple booking</h1>
          <p className="text-paragraph text-lg">
            Stay in touch with our dog walkers through the chat interface. This
            makes it easy to discuss arrangements and make bookings. Once the
            walk has been completed you can rate your walker and book again all
            through the chat.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App
