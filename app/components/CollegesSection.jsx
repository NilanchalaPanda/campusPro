"use client"
import React from 'react'
import { useState } from "react"
function CollegesSection() {
  const [file, setFile] = useState(null);
  const [transcription, setTranscription] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError('Please select a file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

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
      setTranscription(data.text);
      setError('');
    } catch (err) {
      setError('An error occurred while transcribing the audio');
    }
  };

  return (
    <div className='my-10 flex w-full flex-col items-center justify-center bg-violet-400 px-2 py-5 text-center text-slate-100'>
      This strip will display different colleges that are assoicated with us
      <h1>Audio Transcription</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="audio/*" onChange={handleFileChange} />
        <button type="submit">Transcribe</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {transcription && (
        <div>
          <h2>Transcription Result:</h2>
          <p>{transcription}</p>
        </div>
      )}
    </div>
  )
}

export default CollegesSection
