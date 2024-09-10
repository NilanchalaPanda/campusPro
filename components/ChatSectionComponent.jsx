'use client'

import {
  MicIcon,
  School2Icon,
  SendHorizontalIcon,
  LoaderIcon,
  AlertCircleIcon,
  StopCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from 'lucide-react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MicRecorder from 'mic-recorder-to-mp3'
import { sendChatMessage } from '@/redux/actions/sendMessage'

const faqs = [
  'How do I apply for college?',
  'What are the eligibility criteria?',
  'How do I get a scholarship?',
  'What is the admission deadline?',
  'Can I apply for multiple colleges?',
]

export default function ChatSectionComponent() {
  const dispatch = useDispatch()
  const chatState = useSelector((state) => state.chat)

  const [inputText, setInputText] = useState('')
  const [isRecording, setIsRecording] = useState(false)
  const [isBlocked, setIsBlocked] = useState(false)
  const [recorder] = useState(new MicRecorder({ bitRate: 128 }))
  const [error, setError] = useState('')
  const [isFAQOpen, setIsFAQOpen] = useState(false)
  const [loadingIndex, setLoadingIndex] = useState(null) // Track which response is loading

  // Request microphone access
  useState(() => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(() => {
        setIsBlocked(false)
      })
      .catch(() => {
        setIsBlocked(true)
      })
  }, [])

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const index = chatState.chat.length;
      setLoadingIndex(index); // Set loading index for the new message
      dispatch(sendChatMessage({ message: inputText }));
      setInputText(''); // Clear input after sending
    }
  }

  const startRecording = () => {
    if (isBlocked) {
      console.log('Microphone access denied.')
      return
    }

    recorder
      .start()
      .then(() => {
        setIsRecording(true)
      })
      .catch((e) => {
        console.error(e)
        setError('An error occurred while starting the recording.')
      })
  }

  const stopRecording = () => {
    recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const audioBlob = new Blob(buffer, { type: 'audio/mp3' })

        // Send the MP3 file to the API
        sendToApi(audioBlob)

        setIsRecording(false)
      })
      .catch((e) => {
        console.log(e)
        setError('An error occurred while stopping the recording.')
      })
  }

  const sendToApi = async (blob) => {
    const formData = new FormData()
    formData.append('file', blob, 'recording.mp3')

    try {
      const response = await fetch('http://localhost:5000/transcribe', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json()
        setError(`Error: ${errorData.message}`)
        return
      }

      const data = await response.json()
      dispatch(sendChatMessage({ message: data.text }))
      setError('')
    } catch (err) {
      setError('An error occurred while sending the audio to the API.')
    }
  }

  const handleFAQClick = (faq) => {
    const index = chatState.chat.length;
    setLoadingIndex(index); // Set loading index for the FAQ message
    dispatch(sendChatMessage({ message: faq }));
  }

  const toggleFAQDropdown = () => {
    setIsFAQOpen(!isFAQOpen)
  }

  return (
    <div className='flex h-full flex-col rounded-l-2xl bg-white p-4'>
      <div className='flex-grow overflow-y-auto p-4'>
        {chatState.chat.length === 0 && chatState.status !== 'loading' ? (
          <div className='flex h-full flex-col items-center justify-center rounded-xl bg-gray-200 p-8 text-center shadow-md'>
            <School2Icon size={48} className='text-gray-600' />
            <h2 className='mt-4 text-lg font-semibold text-gray-700'>
              How can I assist you today?
            </h2>
          </div>
        ) : (
          <div className='space-y-4'>
            {chatState.chat.map((message, index) => (
              <div key={index}>
                {/* User Message */}
                <div className='flex justify-end'>
                  <div className='max-w-xs rounded-lg bg-blue-500 p-3 text-white shadow-md'>
                    {message.input}
                  </div>
                </div>
                {/* Chatbot Response */}
                <div className='mt-2 flex justify-start'>
                  <div className='relative max-w-xs rounded-lg bg-gray-300 p-3 text-gray-900 shadow-md'>
                    {loadingIndex === index && chatState.status === 'loading' ? (
                      <div className='flex items-center'>
                        <LoaderIcon className='animate-spin text-blue-500' size={24} />
                        <span className='ml-2 text-blue-500'>Loading...</span>
                      </div>
                    ) : (
                      message.response
                    )}
                  </div>
                </div>
              </div>
            ))}
            {chatState.status === 'failed' && (
              <div className='mt-4 flex justify-center'>
                <AlertCircleIcon className='text-red-500' size={24} />
                <span className='ml-2 text-red-500'>{chatState.error}</span>
              </div>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        )}
      </div>
      <div>
        <button
          onClick={toggleFAQDropdown}
          className='text-md flex w-full items-center justify-between rounded-lg bg-gray-200 p-4 font-semibold text-gray-700 shadow-md focus:outline-none'
        >
          Frequently Asked Questions
          {isFAQOpen ? (
            <ChevronUpIcon size={24} className='text-gray-500' />
          ) : (
            <ChevronDownIcon size={24} className='text-gray-500' />
          )}
        </button>
        {isFAQOpen && (
          <div className='mt-4 overflow-y-auto rounded-lg border border-gray-300 bg-white p-4 shadow-md'>
            <div className='space-y-2'>
              {faqs.map((faq, index) => (
                <button
                  key={index}
                  onClick={() => handleFAQClick(faq)}
                  className='w-full rounded-lg bg-blue-100 px-4 py-2 text-left text-blue-900 shadow-md'
                >
                  {faq}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className='mt-4 flex items-center space-x-2 rounded-full border border-gray-300 bg-white p-2 shadow-md'>
        <input
          type='text'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          className='flex-grow rounded-full border-none bg-gray-100 px-4 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder='Type a message...'
        />
        <button
          onClick={isRecording ? stopRecording : startRecording}
          className={`flex-shrink-0 rounded-full p-2 ${isRecording ? 'bg-red-500 hover:bg-red-600' : 'hover:bg-gray-200'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          disabled={isBlocked}
        >
          {isRecording ? (
            <StopCircleIcon color='white' size={24} />
          ) : (
            <MicIcon color='red' size={24} />
          )}
        </button>
        <button
          onClick={handleSendMessage}
          className='flex-shrink-0 rounded-full bg-blue-500 p-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          <SendHorizontalIcon color='white' size={24} />
        </button>
      </div>
    </div>
  )
}
