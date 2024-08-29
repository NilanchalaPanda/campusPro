import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chat: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendChatMessageStart: (state) => {
      state.status = 'loading';
    },
    sendChatMessageSuccess: (state, action) => {
      state.status = 'succeeded';
      state.chat.push(action.payload);
    },
    sendChatMessageFailed: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    clearChat: (state) => {
      state.chat = [];
    },
  },
});

export const { sendChatMessageStart, sendChatMessageSuccess, sendChatMessageFailed, clearChat } = chatSlice.actions;

export default chatSlice.reducer;
