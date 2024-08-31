"use client"
import {useDispatch, useSelector} from "react-redux"
import { AdsComponent, ChatSectionComponent } from '@/components'
import React ,{useState, useEffect}from 'react'
import { sendChatMessage } from "@/redux/actions/sendMessage";

function Chat() {

  
  return (
    <div className='flex h-full w-full'>
      <div className='h-full w-full bg-red-400 md:w-[80%]'>
        <ChatSectionComponent />
      </div>
    </div>
  )
}

export default Chat
