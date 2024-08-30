'use client'

import { MicIcon, School2Icon, SendHorizontalIcon } from 'lucide-react'
import { useState } from 'react'

function ChatSectionComponent() {
  const [messages, setMessages] = useState([])
  const [inputText, setInputText] = useState('')
  const [selectedOptions, setSelectedOptions] = useState({})
  const [step, setStep] = useState(0) // Track the current step

  const handleSendMessage = () => {
    if (inputText.trim()) {
      setMessages([...messages, { type: 'text', content: inputText }])
      setInputText('')
    }
  }

  const handleOptionSelect = (option) => {
    const newMessage = { type: 'option', content: option }
    setMessages([...messages, newMessage])

    if (option === 'Search for colleges') {
      setStep(1)
    } else if (option === 'Get college insights') {
      setStep(4)
    } else if (option === 'Other question') {
      setStep(99) // Skip to free text input
    }
  }

  const handleNextStep = (key, value) => {
    setSelectedOptions({ ...selectedOptions, [key]: value })
    setMessages([...messages, { type: 'text', content: value }])

    if (step === 1) setStep(2) // Move to the next option after location
    if (step === 2 && key === 'Budget') setStep(21) // Show budget options
    if (step === 2 && key === 'Type') setStep(22) // Show college type options
    if (step === 21 || step === 22) setStep(99) // End after selection
    if (step === 4) setStep(99) // End after getting college insights
  }

  const handleVoiceInput = () => {
    // Handle voice input logic here
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
        {step === 0 && (
          <div className='flex space-x-2'>
            <button
              onClick={() => handleOptionSelect('Search for colleges')}
              className='bg-blue-500 text-white px-4 py-2 rounded-full'
            >
              Search for colleges
            </button>
            <button
              onClick={() => handleOptionSelect('Get college insights')}
              className='bg-green-500 text-white px-4 py-2 rounded-full'
            >
              Get college insights
            </button>
            <button
              onClick={() => handleOptionSelect('Other question')}
              className='bg-gray-500 text-white px-4 py-2 rounded-full'
            >
              Other question
            </button>
          </div>
        )}

        {step === 1 && (
          <div className='flex space-x-2'>
            <button
              onClick={() => handleNextStep('Location', 'Location')}
              className='bg-blue-500 text-white px-4 py-2 rounded-full'
            >
              Location
            </button>
            <button
              onClick={() => handleNextStep('Program', 'Program of Interest')}
              className='bg-green-500 text-white px-4 py-2 rounded-full'
            >
              Major / Program of Interest
            </button>
            <button
              onClick={() => handleNextStep('Budget', 'Budget')}
              className='bg-yellow-500 text-white px-4 py-2 rounded-full'
            >
              Tuition Budget
            </button>
            <button
              onClick={() => handleNextStep('Type', 'Type of College')}
              className='bg-red-500 text-white px-4 py-2 rounded-full'
            >
              Type of College
            </button>
          </div>
        )}

        {step === 21 && (
          <div className='flex space-x-2'>
            <button
              onClick={() => handleNextStep('Budget', '₹0 - ₹2 Lakhs')}
              className='bg-yellow-500 text-white px-4 py-2 rounded-full'
            >
              ₹0 - ₹2 Lakhs
            </button>
            <button
              onClick={() => handleNextStep('Budget', '₹2 Lakhs - ₹5 Lakhs')}
              className='bg-yellow-600 text-white px-4 py-2 rounded-full'
            >
              ₹2 Lakhs - ₹5 Lakhs
            </button>
            <button
              onClick={() => handleNextStep('Budget', '₹5 Lakhs - ₹10 Lakhs')}
              className='bg-yellow-700 text-white px-4 py-2 rounded-full'
            >
              ₹5 Lakhs - ₹10 Lakhs
            </button>
            <button
              onClick={() => handleNextStep('Budget', '₹10 Lakhs +')}
              className='bg-yellow-800 text-white px-4 py-2 rounded-full'
            >
              ₹10 Lakhs +
            </button>
          </div>
        )}

        {step === 22 && (
          <div className='flex space-x-2'>
            <button
              onClick={() => handleNextStep('Type', 'Government')}
              className='bg-blue-500 text-white px-4 py-2 rounded-full'
            >
              Government
            </button>
            <button
              onClick={() => handleNextStep('Type', 'Private')}
              className='bg-red-500 text-white px-4 py-2 rounded-full'
            >
              Private
            </button>
          </div>
        )}

        {(step === 2 || step === 3 || step === 4 || step === 99) && (
          <>
            <input
              type='text'
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className='flex-grow border-none bg-gray-100 px-4 py-2 text-gray-900 placeholder-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder={
                step === 2
                  ? 'Enter location...'
                  : step === 3
                  ? 'Enter tuition budget...'
                  : 'Enter college name...'
              }
            />
            <button
              onClick={handleSendMessage}
              className='flex-shrink-0 p-2 rounded-full bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              <SendHorizontalIcon color='white' size={24} />
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default ChatSectionComponent
