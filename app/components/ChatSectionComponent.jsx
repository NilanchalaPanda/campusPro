'use client'

import { sendChatMessage } from '@/redux/actions/sendMessage';
import { MicIcon, School2Icon, SendHorizontalIcon, LoaderIcon, AlertCircleIcon } from 'lucide-react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ChatSectionComponent() {
  const dispatch = useDispatch();
  const chatState = useSelector((state) => state.chat);

  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (inputText.trim()) {
      // Dispatch the action to send the message
      dispatch(sendChatMessage({ message: inputText }));
      setInputText(''); // Clear the input after sending
    }
  };

  const handleVoiceInput = () => {
    // Handle voice input logic here, using Web Speech API or a third-party service.
  };

  return (
    <div className='flex h-full flex-col bg-gray-100 p-4'>
      <div className='flex-grow overflow-y-auto p-4'>
        {chatState.chat.length === 0 && chatState.status !== 'loading' ? (
          <div className='flex flex-col items-center justify-center h-full bg-gray-200 p-8 rounded-xl shadow-md text-center'>
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
                  <div className='max-w-xs p-3 rounded-lg shadow-md bg-blue-500 text-white'>
                    {message.input}
                  </div>
                </div>
                {/* Chatbot Response */}
                <div className='flex justify-start mt-2'>
                  <div className='max-w-xl p-3 rounded-lg shadow-md bg-green-300 text-gray-900'>
                    {message.response}
                  </div>
                </div>
              </div>
            ))}
            {chatState.status === 'loading' && (
              <div className='flex justify-center mt-4'>
                <LoaderIcon className='animate-spin text-blue-500' size={24} />
                <span className='ml-2 text-blue-500'>Loading...</span>
              </div>
            )}
            {chatState.status === 'failed' && (
              <div className='flex justify-center mt-4'>
                <AlertCircleIcon className='text-red-500' size={24} />
                <span className='ml-2 text-red-500'>{chatState.error}</span>
              </div>
            )}
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

// const dispatch = useDispatch();
// const chat = useSelector((state) => state.chat.chat);
// const status = useSelector((state) => state.chat.status);
// const error = useSelector((state) => state.chat.error);
// const [input, setInput] = useState('');

// const handleSend = () => {
//   if (input.trim()) {
//     dispatch(sendChatMessage({ message: input }));
//     setInput('');
//   }
// };
// <div>
// <div>
//   {chat.map((entry, index) => (
//     <div key={index} className="chat-entry">
//       <div className="input">You: {entry.input}</div>
//       <div className="response">Bot: {entry.response}</div>
//     </div>
//   ))}
// </div>
// {status === 'loading' && <p>Loading...</p>}
// {status === 'failed' && <p>Error: {error}</p>}
// <input
//   type="text"
//   value={input}
//   onChange = {(e)=>setInput(e.target.value)}
// />
// <button onClick={handleSend}>Send</button>
// </div>