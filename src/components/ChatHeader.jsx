import { RiArrowDropLeftLine } from "react-icons/ri";
import { HiEllipsisVertical } from "react-icons/hi2";
import avatar from "/src/assets/avatar.jpg";


export const ChatHeader = () => {
  return (
    <div className="w-full h-[70px] bg-gradient-to-r from-degLightViolet to-degLightMagenta rounded-b-md ">
      <span className="absolute -translate-y-1/2 left-1/2  -translate-x-1/2 mx-auto w-[130px] h-[40px]  bg-white block rounded-[22px]"></span>
      <div className="h-[100%] w-full flex justify-between pt-6 px-1">
        <button className="text-white font-bold p-0 text-4xl">
          <RiArrowDropLeftLine />
        </button>
        <div className=" h-full w-full flex items-center">
          <figure className="overflow-hidden w-[30px] h-[30px] rounded-full border-2">
            <img src={avatar} alt="foto avatar" />
          </figure>
          <div className="h-full text-white  px-2 pt-1">
            <h2 className="text-xs font-semibold">Samuel Green </h2>
            <p className="text-[8px] text-placeholderText">Available to Walk</p>
          </div>
        </div>
        <button className="text-white text-2xl">
          <HiEllipsisVertical />
        </button>
      </div>
    </div>
  );
};
