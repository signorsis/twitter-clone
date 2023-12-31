import React from "react";
import { RiHome7Fill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { VscBellDot } from "react-icons/vsc";
import { FiMail } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { BsTwitter } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import {BsThreeDots} from 'react-icons/bs'
import Link from "next/link";
const NAVIGATION_ITEMS = [
  {
    title: "Twitter",
    icon: BsTwitter,
  },
  {
    title: "Home",
    icon: RiHome7Fill,
  },
  {
    title: "Explore",
    icon: BiSearch,
  },
  {
    title: "Notifications",
    icon: VscBellDot,
  },
  {
    title: "Messages",
    icon: FiMail,
  },
  {
    title: "Profile",
    icon: CiUser,
  },
  {
    title: "Communities",
    icon: FaUserFriends,
  },
];
const LeftSidebar = () => {
  return (
    <section className="fixed w-[225px] flex flex-col  items-stretch h-screen space-y-4">
    <div className="flex flex-col items-stretch h-full my-2">
     {NAVIGATION_ITEMS.map((item) => (
       <Link href={`/${item.title.toLowerCase()}`} 
       className="hover:bg-white/20 rounded-3xl transition duration-200 flex text-center justify-start w-fit space-x-2 px-6 py-2" key={item.title}>
         <div className="mr-2 text-xl">
           <item.icon />
         </div>

        { item.title!=="Twitter" &&<div className="text-base">{item.title}</div>}
       </Link>
     ))}

     <button
      className="mt-2 w-full bg-primary rounded-full  py-3 text-sm hover:bg-opacity-80 transition duration-200">
       Post</button>
       </div>
       
       <button
      className="mb-8 w-full flex rounded-full items-center justify-between text-sm hover:bg-opacity-80 transition duration-200">
       
       <div className="flex items-center space-x-2">
       <div className="rounded-full w-8 h-8 bg-primary flex justify-center items-center mr-2 text-sm">S</div>
       <div >
            <div className="font-semibold text-xs"> sisay tadesse</div> 
             <div className="text-slate-500 text-xs">@sisay_tade_see</div>
       </div>
       </div>
       <div >
       <BsThreeDots/>
       </div>

       </button>

   </section>
  
  )
}

export default LeftSidebar
