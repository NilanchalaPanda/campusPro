'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'What features does the AI Chatbot offer?',
    answer:
      "Our AI Chatbot provides instant responses to your queries, offering assistance in various areas such as academics, college recommendations, and more. It's designed to understand natural language and provide accurate and helpful information.",
  },
  {
    question: 'How does the voice assistant work?',
    answer:
      'The voice assistant allows you to interact with the system using voice commands. It transcribes your speech into text, processes the information, and provides verbal responses.',
  },
  {
    question: 'How does the college recommendation system work?',
    answer:
      'Our system analyzes your academic performance, interests, and preferences to recommend colleges that best fit your profile. It uses AI to provide personalized suggestions, helping you make informed decisions.',
  },
  {
    question: 'How do I access the admin dashboard?',
    answer:
      'The admin dashboard is accessible to authorized users only. It provides tools to manage the chatbot, monitor interactions, and view analytics. For access, contact our support team.',
  },
]

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className='w-[95%] md:w-[70%] bg-white py-10 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <h1 className='text-center text-3xl font-bold md:text-5xl'>
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <p className='text-center text-sm font-medium text-gray-900 md:text-lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        </p>
        <div className='mt-3'>
          <div className='divide-y divide-gray-200'>
            {faqs.map((faq, index) => (
              <div key={index} className='py-4'>
                <button
                  className='flex w-full items-center justify-between text-left text-lg font-semibold text-black focus:outline-none'
                  onClick={() => handleToggle(index)}
                >
                  <span>{faq.question}</span>
                  <span>{openIndex === index ? '-' : '+'}</span>
                </button>
                {openIndex === index && (
                  <div className='mt-2 text-base text-gray-900 font-medium'>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Accordion
