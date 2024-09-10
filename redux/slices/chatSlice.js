import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    chat: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    sendChatMessageStart: (state, action) => {
      state.status = 'loading';
      state.chat.push(action.payload); // Add message with null response
    },
    updateChatMessage: (state, action) => {
      const message = state.chat.find(msg => msg.id === action.payload.id);
      if (message) {
        message.response = action.payload.response;
      }
      state.status = 'idle';
    },
    sendChatMessageFailed: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { sendChatMessageStart, updateChatMessage, sendChatMessageFailed } = chatSlice.actions;
export default chatSlice.reducer;
