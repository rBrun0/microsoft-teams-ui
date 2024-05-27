import Link from 'next/link'
import React, { useEffect } from 'react'
import { CiCalendar } from 'react-icons/ci'
import { FaRegBell } from 'react-icons/fa'
import { FaPeopleGroup } from 'react-icons/fa6'
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5'
import ActiveLink from '../activeLink/ActiveLink'

const MainAside = () => {
  

  return (
    <aside className="h-svh w-16 bg-neutral-950 pt-3">
          <ul className=" text-gray-500 space-y-2">
            <li className="flex flex-col items-center text-[10px] cursor-pointer group hover:text-blue-500"><Link href={"#"}> <FaRegBell className="text-xl  text-gray-500 group-hover:text-blue-500"/> Atividade </Link></li>
            <li className="flex flex-col items-center text-[10px] cursor-pointer group  hover:text-blue-500 "><ActiveLink href={"/comunity"}> <FaPeopleGroup className="text-xl text-gray-500  group-hover:text-blue-500"/> Comunidade </ActiveLink> </li>
            <li className="flex flex-col items-center text-[10px] cursor-pointer group  hover:text-blue-500"><ActiveLink href={"/"}> <IoChatbubbleEllipsesOutline className="text-xl group-text-gray-500  hover:text-blue-500"/> Chat </ActiveLink> </li>
            <li className="flex flex-col items-center text-[10px] cursor-pointer group  hover:text-blue-500"><Link href={"#"}> <CiCalendar className="text-xl text-gray-500  group-hover:text-blue-500"/> Calendario </Link></li>
          </ul>
        </aside>
  )
}

export default MainAside