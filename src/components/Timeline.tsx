import Link from "next/link";
//imports for main section of html
import { AiOutlinePicture } from "react-icons/ai";
import { MdOutlineGifBox } from "react-icons/md";
import { BiPoll } from "react-icons/bi";
import { PiSmileyBold } from "react-icons/pi";
import { AiOutlineSchedule } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import {BsDot} from 'react-icons/bs'

import {BiMessageRounded} from 'react-icons/bi'
import {FaRetweet} from 'react-icons/fa'
import {AiOutlineHeart} from 'react-icons/ai'
import {BiBarChart} from 'react-icons/bi'
import {LuShare} from 'react-icons/lu'


import AutogrowTextarea from "./ui/AutogrowTextarea";

const Timeline = () => {
  let iconStyles = { color: "primary", fontSize: "1em" };
   
  return (
    <main className="ml-[275px] w-[500px] border-r border-l  border-gray-700 h-full min-h-screen flex flex-col ">
    <div className="sticky border-b border-gray-700  top-0 z-100 bg-black/80">
      <h1 className="self-start mt-4 ml-2 font-bold text-gray-200">
        Home
      </h1>
      <div className="mt-4 mb-3 font-bold flex flex-row justify-around  text-[14px]">
        <div className="">
          <Link
            href="#"
            className="text-gray-500  py-2  focus:border-b-4 focus:border-primary focus:text-white "
          >
            For you
          </Link>
        </div>
        <div className="">
          <Link
            href="#"
            className="text-gray-500  py-2  focus:border-b-4 focus:border-primary focus:text-white "
          >
            Following
          </Link>
        </div>
      </div>
      </div>
    <div className="flex flex-col justify-start align-top ">
      
      <div className="border-b mt-4 border-gray-700 flex flex-row">
        <div className=" p-4  rounded-full w-6 h-6 mx-2 mt-2  bg-primary flex items-center justify-center ">
         S {/** here goes a fetched first letter of the user name */}{" "}
        </div>

        <div className="flex flex-col w-full mt-1 mb-4  mr-4">
          <AutogrowTextarea/>
          <div className="flex flex-row justify-between mt-4 w-full">
            <div className="flex flex-row justify-start items-center  text-xl space-x-1 ">
              <div className="rounded-full p-1 hover:bg-slate-500/50">
                {" "}
                <AiOutlinePicture style={iconStyles} />{" "}
              </div>
              <div className="rounded-full p-1 hover:bg-slate-500/50">
                <MdOutlineGifBox style={iconStyles} />
              </div>
              <div className="rounded-full p-1 hover:bg-slate-500/50">
                <BiPoll style={iconStyles} />
              </div>
              <div className="rounded-full p-1 hover:bg-slate-500/50">
                <PiSmileyBold style={iconStyles} />
              </div>
              <div className="rounded-full p-1 hover:bg-slate-500/50">
                <AiOutlineSchedule style={iconStyles} />
              </div>
              <div className="rounded-full p-1 hover:bg-slate-500/50">
                <CiLocationOn style={iconStyles} />
              </div>{" "}
            </div>
            <button className="mt-2 w-20 h-6 bg-primary rounded-full  py-2 text-sm hover:bg-opacity-80 transition duration-200 flex justify-center items-center">
              Post
            </button>
          </div>
        </div>
      </div>
    
    </div>
    
   {
    Array.from({length:5} as any).map(( _,i)=>{
       return (   
          <div key={i} className="border-b border-gray-700 flex flex-row ">
        <div className="flex flex-col justify-start items-center">
        <div className=" p-4  rounded-full w-6 h-6 mx-2 mt-2  bg-gray-500 flex items-center justify-center ">
         X {/** here goes a fetched first letter of the user name */}{" "}
        </div>

        </div>
        
        <div className="flex flex-col w-full mt-2 mr-4 ">
         <div className="flex flex-row w-full text-slate-500 items-center"> 
         <div className="text-slate-200 mr-2">Elon Musk</div>
         <div className=" text-slate-500 mr-2">@elonmusk</div>
         <BsDot/>
         <div className=" ">2h</div>
         </div>
         <div className="w-full">
            tweets-text : This platform is by far the best way to reach world leaders, CEOs and the cognoscenti in general
        </div>
        <div className="w-[full] h-[300px] bg-gray-600 rounded-xl">
         
        </div>
        <div className="flex flex-row justify-between items-center text-gray-400 mt-4 mb-4">
            <div><BiMessageRounded className="hover:text-blue-500"/></div>
            <div><FaRetweet className="hover:text-green-300"/></div>
            <div><AiOutlineHeart className="hover:text-red-400"/></div>
            <div><BiBarChart className="hover:text-blue-500"/></div>
            <div><LuShare className="hover:text-blue-500"/></div>
        </div>
        </div>
        
      </div>
   
        );
    })
   }
   
  </main>
  )
}

export default Timeline
