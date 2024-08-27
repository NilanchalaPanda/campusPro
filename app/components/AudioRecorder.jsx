"use client"

import { useState } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';

export default function AudioRecorder() {
  const [recorder] = useState(new MicRecorder({ bitRate: 128 }));
  const [isRecording, setIsRecording] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [transcription, setTranscription] = useState('');
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

  const startRecording = () => {
    if (isBlocked) {
      console.log('Microphone access denied.');
      return;
    }

    recorder.start().then(() => {
      setIsRecording(true);
    }).catch((e) => {
      console.error(e);
    });
  };

  const stopRecording = () => {
    recorder.stop().getMp3().then(([buffer, blob]) => {
      const audioBlob = new Blob(buffer, { type: 'audio/mp3' });
      setAudioBlob(audioBlob);

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
      setTranscription(data.text);
      setError('');
    } catch (err) {
      setError('An error occurred while sending the audio to the API.');
    }
  };

  return (
    <div>
      <button onClick={isRecording ? stopRecording : startRecording} disabled={isBlocked}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      {audioBlob && (
        <audio controls>
          <source src={URL.createObjectURL(audioBlob)} type="audio/mp3" />
        </audio>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {transcription && (
        <div>
          <h2>Transcription Result:</h2>
          <p>{transcription}</p>
        </div>
      )}
    </div>
  );
}
