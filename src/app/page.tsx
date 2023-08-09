import LeftSidebar from "@/components/LeftSidebar";
import Link from "next/link";

//imports for main section of html
import {AiOutlinePicture} from "react-icons/ai"
import {MdOutlineGifBox} from "react-icons/md"
import {BiPoll} from "react-icons/bi"
import {PiSmileyBold} from "react-icons/pi"
import {AiOutlineSchedule} from "react-icons/ai"
import {CiLocationOn} from "react-icons/ci"

function Home() {
  let iconStyles = { color: "rgb(2 132 199)", fontSize: "1em" };
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black ">
      <div className="max-w-screen-lg w-full h-full flex relative">
        {/* now make the three sections of the twitter layout */}
        {/* left side bar used as a header and navigaion */}
        <LeftSidebar />
        <main className="ml-[275px] w-[500px] border-r border-l  border-gray-700 h-full min-h-screen flex flex-col ">
          <div className="flex flex-col justify-start align-top ">
            <h1 className="self-start mt-4 ml-2 font-bold text-gray-200">
              Home
            </h1>
            <div className="mt-4 font-bold flex flex-row justify-around  text-[14px]">
              <div className="">
                <Link
                  href="#"
                  className="text-gray-500  py-2  focus:border-b-4 focus:border-sky-500 focus:text-white "
                >
                  For you
                </Link>
              </div>
              <div className="">
                <Link
                  href="#"
                  className="text-gray-500  py-2  focus:border-b-4 focus:border-sky-500 focus:text-white "
                >
                  Following
                </Link>
              </div>
            </div>
            <div className=" border-t mt-4 border-gray-700 flex flex-row">
              <div className="rounded-2xl w-8 h-8 text-base bg-sky-600 flex flex-col justify-center items-center">
                S {/** here goes a fetched first letter of the user name */}{" "}
              </div>

              <div className="flex flex-col w-full">
                <input
                  type="text"
                  placeholder="What is happening?!"
                  className="ml-2 my-1 w-full rounded-lg bg-slate-800 placeholder:text-slate-500 focus:outline-none placeholder:text-lg "
                />
                <div className="flex flex-row justify-between mt-4 w-full">
                  <div className="flex flex-row justify-start items-center  text-xl space-x-1 ">
                    <div className="rounded-full p-1 hover:bg-slate-500/50" > <AiOutlinePicture style={iconStyles}/> </div>
                    <div className="rounded-full p-1 hover:bg-slate-500/50"><MdOutlineGifBox style={iconStyles}/></div>
                    <div className="rounded-full p-1 hover:bg-slate-500/50"><BiPoll style={iconStyles}/></div>
                    <div className="rounded-full p-1 hover:bg-slate-500/50"><PiSmileyBold style={iconStyles}/></div>
                    <div className="rounded-full p-1 hover:bg-slate-500/50"><AiOutlineSchedule style={iconStyles}/></div>
                    <div className="rounded-full p-1 hover:bg-slate-500/50"><CiLocationOn style={iconStyles}/></div> </div>
                  <button
      className="mt-2 w-20 h-6 bg-sky-500 rounded-full  py-2 text-sm hover:bg-opacity-80 transition duration-200 flex justify-center items-center">
       Post</button>
     
                </div>
              </div>
            </div>
          </div>
        </main>
        <section></section>
      </div>
    </div>
  );
}

export default Home;
