'use client'

import { MicIcon, School2Icon, SendHorizontalIcon } from 'lucide-react'
import { useState } from 'react'

function ChatSectionComponent() {
  const [messages, setMessages] = useState([])
  const [inputText, setInputText] = useState('')
  const [selectedOptions, setSelectedOptions] = useState({})

  const questionFlow = {
    initial: [
      { label: 'Search for colleges', next: 'searchColleges' },
      { label: 'Get college insights', next: 'collegeInsights' },
      { label: 'Other question', next: 'freeText' },
    ],
    searchColleges: [
      { label: 'Location', next: 'location' },
      { label: 'Major / Program of Interest', next: 'program' },
      { label: 'Tuition Budget', next: 'budget' },
      { label: 'Type of College', next: 'collegeType' },
    ],
    budget: [
      { label: '₹0 - ₹2 Lakhs', next: 'inputAvailable' },
      { label: '₹2 Lakhs - ₹5 Lakhs', next: 'inputAvailable' },
      { label: '₹5 Lakhs - ₹10 Lakhs', next: 'inputAvailable' },
      { label: '₹10 Lakhs +', next: 'inputAvailable' },
    ],
    collegeType: [
      { label: 'Government', next: 'inputAvailable' },
      { label: 'Private', next: 'inputAvailable' },
    ],
    location: { input: true, next: 'inputAvailable' },
    program: { input: true, next: 'inputAvailable' },
    collegeInsights: { input: true, next: 'inputAvailable' },
    freeText: { input: true, next: 'inputAvailable' },
    inputAvailable: { input: true, next: 'inputAvailable' }, // Keeps input available after end options
  }

  const [currentStep, setCurrentStep] = useState('initial')

  const handleOptionSelect = (option) => {
    const newMessage = { type: 'option', content: option }
    setMessages([...messages, newMessage])

    const selectedOption = questionFlow[currentStep].find(
      (q) => q.label === option,
    )
    setCurrentStep(selectedOption.next)
  }

  const handleSendMessage = () => {
    if (inputText.trim()) {
      setMessages([...messages, { type: 'text', content: inputText }])
      setInputText('')
      // Keep the input field available after sending a message
      setCurrentStep('inputAvailable')
    }
  }

  return (
    <div className='flex h-full flex-col bg-gray-100 p-4'>
      <div className='flex-grow overflow-y-auto p-4'>
        {messages.length === 0 ? (
          <div className='flex h-full flex-col items-center justify-center rounded-xl bg-gray-200 p-8 text-center shadow-md'>
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
                  className={`max-w-xs rounded-lg p-3 shadow-md ${
                    message.type === 'text'
                      ? 'bg-blue-100 text-blue-900'
                      : 'bg-green-100 text-green-900'
                  }`}
                >
                  <div className='flex items-center space-x-2'>
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                        message.type === 'text' ? 'bg-blue-300' : 'bg-green-300'
                      }`}
                    >
                      {message.type === 'text' ? 'T' : 'A'}
                    </div>
                    <div className='flex-grow'>{message.content}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className='mt-4 flex items-center space-x-2 rounded-full border border-gray-300 bg-white p-2 shadow-md'>
        {Array.isArray(questionFlow[currentStep]) &&
          questionFlow[currentStep].map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(option.label)}
              className='rounded-full bg-blue-500 px-4 py-2 text-white'
            >
              {option.label}
            </button>
          ))}

        {(questionFlow[currentStep].input || currentStep === 'inputAvailable') && (
          <>
            <input
              type='text'
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className='flex-grow rounded-full border-none bg-gray-100 px-4 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Type your answer here...'
            />
            <button
              onClick={handleSendMessage}
              className='flex-shrink-0 rounded-full bg-blue-500 p-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
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
