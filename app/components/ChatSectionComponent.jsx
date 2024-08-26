'use client'

import { MicIcon, School2Icon, SendHorizonalIcon } from 'lucide-react'
import { useState } from 'react'

function ChatSectionComponent() {
  const [messages, setMessages] = useState([])
  const [inputText, setInputText] = useState('')
  const [responseType, setresponseType] = useState('text')

  const handleSendMessage = () => {
    if (inputText.trim()) {
      setMessages([...messages, { type: 'text', content: inputText }])
      setInputText('')
      // Add your logic to send the message to the chatbot or API here.
    }
  }

  const handleVoiceInput = () => {
    // Handle voice input logic here, using Web Speech API or a third-party service.
  }

  return (
    <div className='my-auto flex h-full w-full flex-col bg-white p-4'>
      <div className='mb-4 flex-grow overflow-y-auto'>
        {messages.length === 0 ? (
          <div className='m-auto flex w-[50%] flex-col items-center justify-center rounded-xl bg-zinc-700 text-white opacity-80'>
            <School2Icon size={42} />
            <h2 className='text-xl'>How can I help you today?</h2>
          </div>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={`mb-2 rounded-md p-2 ${
                message.type === 'text' ? 'bg-blue-100' : 'bg-green-100'
              }`}
            >
              {message.content}
            </div>
          ))
        )}
      </div>

      <div className='flex items-center rounded-2xl bg-zinc-400 px-4'>
        <input
          type='text'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className='flex-grow rounded-md bg-zinc-400 px-2 py-6 text-white placeholder:text-white focus:outline-none'
          placeholder='Type a message...'
        />
        <div className='flex items-center gap-x-2'>
          <button onClick={handleVoiceInput}>
            <MicIcon color='red' size={30} />
          </button>
          <button
            onClick={handleSendMessage}
            className='rounded-md bg-blue-500 p-2'
          >
            <SendHorizonalIcon color='blue' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatSectionComponent
