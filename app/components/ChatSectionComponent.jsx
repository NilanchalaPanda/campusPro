'use client'

import { MicIcon, School2Icon, SendHorizontalIcon } from 'lucide-react'
import { useState } from 'react'

function ChatSectionComponent() {
  const [messages, setMessages] = useState([])
  const [inputText, setInputText] = useState('')
  const [responseType, setResponseType] = useState('text')

  const handleSendMessage = () => {
    if (inputText.trim()) {
      setMessages([...messages, { type: responseType, content: inputText }])
      setInputText('')
      // Add your logic to send the message to the chatbot or API here.
    }
  }

  const handleVoiceInput = () => {
    // Handle voice input logic here, using Web Speech API or a third-party service.
  }

  return (
    <div className='flex h-full flex-col bg-gray-100 p-4'>
      <div className='flex-grow overflow-y-auto p-4'>
        {messages.length === 0 ? (
          <div className='flex flex-col items-center justify-center h-full bg-gray-200 p-8 rounded-xl shadow-md text-center'>
            <School2Icon size={48} className='text-gray-600' />
            <h2 className='mt-4 text-lg font-semibold text-gray-700'>
              How can I assist you today?
            </h2>
          </div>
        ) : (
          <div className='space-y-4'>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === 'text' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg shadow-md ${
                    message.type === 'text'
                      ? 'bg-blue-100 text-blue-900'
                      : 'bg-green-100 text-green-900'
                  }`}
                >
                  <div className='flex items-center space-x-2'>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        message.type === 'text' ? 'bg-blue-300' : 'bg-green-300'
                      }`}
                    >
                      {message.type === 'text' ? 'T' : 'A'}
                    </div>
                    <div className='flex-grow'>
                      {message.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className='mt-4 flex items-center space-x-2 bg-white border border-gray-300 rounded-full shadow-md p-2'>
        <input
          type='text'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className='flex-grow border-none bg-gray-100 px-4 py-2 text-gray-900 placeholder-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder='Type a message...'
        />
        <button
          onClick={handleVoiceInput}
          className='flex-shrink-0 p-2 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          <MicIcon color='red' size={24} />
        </button>
        <button
          onClick={handleSendMessage}
          className='flex-shrink-0 p-2 rounded-full bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          <SendHorizontalIcon color='white' size={24} />
        </button>
      </div>
    </div>
  )
}

export default ChatSectionComponent
