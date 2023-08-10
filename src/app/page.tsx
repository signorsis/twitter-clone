"use client"
import LeftSidebar from "@/components/LeftSidebar";
import Timeline from "@/components/Timeline";
import Link from "next/link";



function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black ">
      <div className="max-w-screen-lg w-full h-full flex relative">
        {/* now make the three sections of the twitter layout */}
        {/* left side bar used as a header and navigaion */}
        <LeftSidebar />
        <Timeline/>
        <section></section>
      </div>
    </div>
  );
}

export default Home;
