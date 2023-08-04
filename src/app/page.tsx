import LeftSidebar from "@/components/LeftSidebar";
import Link from "next/link";

function Home() {
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
            <div className="mt-4 font-bold flex flex-row justify-around  text-xs">
              <div className=" hover:bg-gray-600">
                
                <Link
                  href="#"
                  className="text-gray-500  py-2 focus:border-b-4 focus:border-sky-500 focus:text-white "
                >
                  For you
                </Link>
              </div>
              <div className="hover:bg-gray-600 ">
                <Link
                  href="#"
                  className="text-gray-500  py-2  focus:border-b-4 focus:border-sky-500 focus:text-white "
                >
                  Following
                </Link>
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
