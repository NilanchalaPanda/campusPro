import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chat: [],  // Each object will have `input` and `response`
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addChat: (state, action) => {
      state.chat.push(action.payload);
    },
    clearChat: (state) => {
      state.chat = [];
    },
  },
});

export const { addChat, clearChat } = chatSlice.actions;

export default chatSlice.reducer;
