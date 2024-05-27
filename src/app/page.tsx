import { FaRegBell } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";
import { BsCameraVideoFill } from "react-icons/bs";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import MainAside from "@/components/mainAside/MainAside";




export default function Home() {
  return (
    <>
      <header className="bg-blue-900 max-w-full h-12 text-white">

      </header>

      <div className="flex flex-1 max-w-full">

        <MainAside/>

        <div className="h-svh w-[290px] bg-customDark shadow-sm">
          <header className="h-14 flex justify-between items-center pl-2 pr-2 flex-1  border-y-2 border-y-black">
            <span className="text-white font-bold">Chat</span>
            <div className="flex items-center justify-center gap-2">
              <div className="cursor-pointer hover:text-blue-500"><IoFilter/></div>
              <div className="p-2 rounded-full border-gray-400 border-[1px] cursor-pointer hover:bg-gray-600"><BsCameraVideoFill/></div>
              <div className="p-2 rounded-full border-blue-700 bg-blue-700 border-[1px] cursor-pointer hover:bg-blue-600"><MdOutlineAssignmentTurnedIn/></div>
            </div>
          </header>

          <div className="w-[90%] m-auto flex items-center justify-center group border-gray-400 border-[1px] cursor-pointer hover:bg-gray-500 transition-colors rounded-md space-x-1 mt-4 pt-[2px] pb-[2px] pl-4 pr-4">
          <FaRegUser size={15} className="text-blue-500 group-hover:text-gray-200 transition-colors"/>
          <span className="text-sm">Localizar e convidar pessoas</span>
          </div>

        </div>

        <section className="flex-1 bg-zinc-900 shadow-md pt-24">
          <h1 className="text-center text-xl font-bold">Bem vindo aos Teams!</h1>
          <p className="text-center text-[13px]">Veja como começar...</p>

          <div className="flex items-center justify-around mt-4">
            <div className="w-[235px] h-60 rounded-lg shadow-md bg-zinc-900">
              <div className="bg-gray-400 w-[100%] h-24 rounded-t-lg"></div>
              <h1 className="text-[13px] text-center font-bold">Convidar pessoas que voce conhece</h1>
              <p className="text-center text-[11px]">É facil reunir todos no teams.</p>

              <button className="ml-[19%] mt-12 text-sm bg-blue-700 px-3 py-1 rounded-sm font-bold hover:bg-blue-500 transition-colors">Convidar pessoas</button>
            </div>

            <div className="w-[235px] h-60 rounded-lg shadow-md bg-zinc-900">
              <div className="bg-gray-400 w-[100%] h-24 rounded-t-lg"></div>
              <h1 className="text-[13px] text-center font-bold">Comece a conversar</h1>
              <p className="text-center text-[11px]">Envie mensagens instantâneas, compartilhe arquivos e muito mais pelo chat.</p>

              <button className="ml-[19%] mt-8 text-sm bg-blue-700 px-3 py-1 rounded-sm font-bold hover:bg-blue-500 transition-colors">Convidar pessoas</button>
            </div>

            <div className="w-[235px] h-60 rounded-lg shadow-md bg-zinc-900">
              <div className="bg-gray-400 w-[100%] h-24 rounded-t-lg"></div>
              <h1 className="text-[13px] text-center font-bold">Reunir agora</h1>
              <p className="text-center text-[11px]">Ignore o calendário e crie uma reunião instantânea com apenas um clique.</p>

              <button className="ml-[19%] mt-8 text-sm bg-blue-700 px-3 py-1 rounded-sm font-bold hover:bg-blue-500 transition-colors">Convidar pessoas</button>
            </div>

            

            

            
            {/*  */}
            

          </div>
        </section>

      
      </div>
    </>
  );
}
