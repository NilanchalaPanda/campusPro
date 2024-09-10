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
  ThumbsUp,
  ThumbsDown,
  Smile,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MicRecorder from 'mic-recorder-to-mp3'
import { sendChatMessage } from '@/redux/actions/sendMessage'
import { BeatLoader } from 'react-spinners'
import {
  sendChatMessageStart,
  updateChatMessage,
} from '@/redux/slices/chatSlice'

const faqs = [
  {
    id: 1,
    question: 'How do I apply for college?',
    answer:
      'I can help you with your application for college in Rajasthan. First, you should research universities and colleges in Rajasthan offering the course you want to study. You can then apply directly to the college or university of your choice. You can also apply for a scholarship from the Government of Rajasthan, Social Justice, and Empowerment Department.',
  },
  {
    id: 2,
    question: 'What are the eligibility criteria?',
    answer:
      'The eligibility criteria for engineering colleges in Rajasthan are based on the marks obtained in a state or national-level entrance exam, followed by a counselling session held online. The Rajasthan Engineering Admission Process (REAP) follows a comprehensive criteria to evaluate candidates for admission to engineering programmes in the state.',
  },
  {
    id: 3,
    question: 'How do I get a scholarship?',
    answer:
      'To get a scholarship in Rajasthan, you must have a domicile of Rajasthan. The Rajasthan Scholarship application form is available online. You can apply for the scholarship when college admission starts.',
  },
  {
    id: 4,
    question: 'What is the admission deadline?',
    answer:
      'The admission deadline for colleges in Rajasthan varies from college to college. You should check the official website of the college you are interested in to know the admission deadline. Some colleges may have an early admission deadline, while others may have a later deadline. It is important to apply before the deadline to secure your seat in the college.',
  },
  {
    id: 5,
    question: 'Can I apply for multiple colleges?',
    answer:
      'Yes, you can apply for multiple colleges in Rajasthan. However, you should check the admission guidelines of each college to know the application process and eligibility criteria. Some colleges may require you to submit separate applications for each course, while others may allow you to apply for multiple courses through a single application form.',
  },
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

  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)

  const [questionsAsked, setQuestionsAsked] = useState(0)
  const [feedback, setFeedback] = useState(0)

  useEffect(() => {
    const element = document.getElementById('chat-section')
    // //scroll to bottom
    // element.scrollTop = element.scrollHeight
    // smooth scroll
    element.scrollTo({ top: element.scrollHeight, behavior: 'smooth' })
  }, [
    chatState.chat,
    chatState.status,
    chatState.error,
    isFAQOpen,
    questionsAsked,
  ])

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
      const index = chatState.chat.length
      setLoadingIndex(index) // Set loading index for the new message
      dispatch(sendChatMessage({ message: inputText }))
      setInputText('') // Clear input after sending
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
    setQuestionsAsked((prev) => prev + 1)
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
    setQuestionsAsked((prev) => prev + 1)
    const chatId = new Date().getTime()
    const index = chatState.chat.length
    setLoadingIndex(index) // Set loading index for the FAQ message
    dispatch(
      sendChatMessageStart({ id: chatId, input: faq.question, response: null }),
    )
    setTimeout(() => {
      dispatch(
        updateChatMessage({
          id: chatId,
          response: faq.answer,
        }),
      )
    }, 1000)
  }

  const toggleFAQDropdown = () => {
    setIsFAQOpen(!isFAQOpen)
  }

  console.log('len', questionsAsked)

  return (
    <div className='flex h-full flex-col rounded-l-2xl bg-white p-4'>
      <div
        id='chat-section'
        className='no-scrollbar flex-grow overflow-y-auto rounded-xl py-4 shadow-md transition-all duration-300 ease-in-out'
      >
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
                  <div className='max-w-xs rounded-lg bg-purple-500 p-3 text-white shadow-md'>
                    {message.input}
                  </div>
                </div>
                {/* Chatbot Response */}
                <div className='mt-2 flex justify-start'>
                  <div className='relative max-w-xs rounded-lg bg-gray-100 p-3 text-gray-900 shadow-md'>
                    {loadingIndex === index &&
                    chatState.status === 'loading' ? (
                      <div className='flex items-center'>
                        <BeatLoader color='purple' />
                      </div>
                    ) : (
                      message.response
                    )}
                  </div>
                </div>
                {chatState.status !== 'loading' && (
                  <div className='items-centers mt-2 flex justify-start gap-3'>
                    <ThumbsUp
                      onClick={() => {
                        setLiked(index)
                        setDisliked(false)
                      }}
                      className='transform cursor-pointer transition-all duration-300 ease-in-out hover:scale-110'
                      height={20}
                      width={20}
                      stroke='rgb(168 85 247)'
                      fill={liked === index ? 'rgb(168 85 247)' : 'none'}
                    />
                    <ThumbsDown
                      onClick={() => {
                        setDisliked(index)
                        setLiked(false)
                      }}
                      className='mt-1 transform cursor-pointer transition-all duration-300 ease-in-out hover:scale-110'
                      height={20}
                      width={20}
                      stroke='rgb(168 85 247)'
                      fill={disliked === index ? 'rgb(168 85 247)' : 'none'}
                    />
                  </div>
                )}
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

        {questionsAsked % 5 == 0 &&
          questionsAsked !== 0 &&
          chatState.status !== 'loading' && (
            <div className='mt-2 flex justify-center text-center'>
              <div className='relative max-w-xs rounded-lg bg-gray-100 p-3 text-gray-900 shadow-md'>
                Please rate your experience with the chatbot.
                <div className='mt-2 flex justify-center gap-2'>
                  {Array.from({ length: 5 }, (_, i) => (
                    <Smile
                      className='cursor-pointer text-white transition-all duration-300 ease-in-out hover:scale-110'
                      key={i}
                      onClick={() => setFeedback(i + 1)}
                      stroke={feedback >= i + 1 ? '#A2539E' : '#D3D3D3'}
                      //fill={feedback >= i + 1 ? 'rgb(168 85 247)' : 'none'}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
      </div>
      <div className='bg-white pt-4'>
        <button
          onClick={toggleFAQDropdown}
          className='text-md flex w-full items-center justify-between rounded-lg bg-gray-200 px-4 py-2 font-semibold text-gray-700 shadow-md focus:outline-none'
        >
          Frequently Asked Qs
          {isFAQOpen ? (
            <ChevronDownIcon size={24} className='text-gray-500' />
          ) : (
            <ChevronUpIcon size={24} className='text-gray-500' />
          )}
        </button>
        {isFAQOpen && (
          <div className='mt-4 overflow-y-auto rounded-lg border border-gray-300 bg-white p-4 shadow-md'>
            <div className='space-y-2'>
              {faqs.map(({ question, ...others }, index) => (
                <button
                  key={index}
                  onClick={() => {
                    handleFAQClick({ question, ...others })
                    setIsFAQOpen(false)
                  }}
                  className='w-full rounded-lg bg-purple-100 px-4 py-2 text-left text-purple-900 shadow-md'
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className='mt-4 flex w-full flex-wrap items-center space-x-2 rounded-full border border-gray-300 p-2 shadow-md'>
        <input
          type='text'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          className='min-w-0 flex-1 rounded-full border-none bg-gray-100 px-4 py-2 text-gray-900 placeholder-gray-500'
          placeholder='Type a message...'
        />
        <button
          onClick={isRecording ? stopRecording : startRecording}
          className={`rounded-full ${isRecording ? 'bg-red-300 hover:bg-red-400' : 'hover:bg-gray-200'}`}
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
          className='rounded-full bg-purple-500 p-2 hover:bg-purple-600'
        >
          <SendHorizontalIcon color='white' size={20} />
        </button>
      </div>
    </div>
  )
}
