"use client"
import {useDispatch, useSelector} from "react-redux"
import { AdsComponent, ChatSectionComponent } from '@/app/components'
import React ,{useState, useEffect}from 'react'

import { sendChatMessage } from "@/redux/slices/chatSlice"
function Chat() {

  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChatResponse = async () => {
      setLoading(true);
      setError(null);

      try {
        const staticInput = 'Hello, how can I use this API?'; // Static input
        const response = await fetch('https://langchain-agent-j6l2.onrender.com/search', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query: staticInput }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch response');
        }

        const data = await response.json();
        // Assuming `data` contains the response message
        setChat([{ input: staticInput, response: data.response }]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchChatResponse();
  }, []);
  return (
    <div className='flex h-full w-full'>
      <div className='h-full w-full bg-red-400 md:w-[80%]'>
        <ChatSectionComponent />
      </div>
      <div className='hidden md:block md:h-full md:w-[20%] md:bg-green-400'>
        <AdsComponent />

        <div>
      <div>
        {chat.map((entry, index) => (
          <div key={index} className="chat-entry">
            <div className="input">You: {entry.input}</div>
            <div className="response">Bot: {entry.response}</div>
          </div>
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </div>
      </div>
    </div>
  )
}

export default Chat
