'use client'

import { MicIcon, School2Icon, SendHorizontalIcon, LoaderIcon, AlertCircleIcon, StopCircleIcon } from 'lucide-react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MicRecorder from 'mic-recorder-to-mp3'
import { sendChatMessage } from '@/redux/actions/sendMessage'

export default function ChatSectionComponent() {
  const dispatch = useDispatch();
  const chatState = useSelector((state) => state.chat);

  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [recorder] = useState(new MicRecorder({ bitRate: 128 }));
  const [error, setError] = useState('');

  // Request microphone access
  useState(() => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(() => {
        setIsBlocked(false);
      })
      .catch(() => {
        setIsBlocked(true);
      });
  }, []);

  const handleSendMessage = () => {
    if (inputText.trim()) {
      dispatch(sendChatMessage({ message: inputText }));
      setInputText(''); // Clear the input after sending
    }
  };

  const startRecording = () => {
    if (isBlocked) {
      console.log('Microphone access denied.');
      return;
    }

    recorder.start().then(() => {
      setIsRecording(true);
    }).catch((e) => {
      console.error(e);
      setError('An error occurred while starting the recording.');
    });
  };

  const stopRecording = () => {
    recorder.stop().getMp3().then(([buffer, blob]) => {
      const audioBlob = new Blob(buffer, { type: 'audio/mp3' });

      // Send the MP3 file to the API
      sendToApi(audioBlob);

      setIsRecording(false);
    }).catch((e) => {
      console.log(e);
      setError('An error occurred while stopping the recording.');
    });
  };

  const sendToApi = async (blob) => {
    const formData = new FormData();
    formData.append('file', blob, 'recording.mp3');

    try {
      const response = await fetch('http://localhost:5000/transcribe', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(`Error: ${errorData.message}`);
        return;
      }

      const data = await response.json();
       console.log(data.text)
      dispatch(sendChatMessage({ message: data.text }));
      setError('');
    } catch (err) {
      setError('An error occurred while sending the audio to the API.');
    }
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
                  <div className='max-w-xs p-3 rounded-lg shadow-md bg-gray-300 text-gray-900'>
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
            {error && <p style={{ color: 'red' }}>{error}</p>}
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
          onClick={isRecording ? stopRecording : startRecording}
          className={`flex-shrink-0 p-2 rounded-full ${isRecording ? 'bg-red-500 hover:bg-red-600' : 'hover:bg-gray-200'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
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
          className='flex-shrink-0 p-2 rounded-full bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          <SendHorizontalIcon color='white' size={24} />
        </button>
      </div>
    </div>
  )
}
