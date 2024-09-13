import { createSlice } from "@reduxjs/toolkit";

// Helper function to save chat to localStorage
const saveChatToLocalStorage = (chat) => {
  localStorage.setItem('chatState', JSON.stringify(chat));
}

// Helper function to load chat from localStorage
const loadChatFromLocalStorage = () => {
  const storedChat = localStorage.getItem('chatState');
  return storedChat ? JSON.parse(storedChat) : [];
};

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    chat: loadChatFromLocalStorage(), // Load from localStorage
    status: 'idle',
    error: null,
  },
  reducers: {
    sendChatMessageStart: (state, action) => {
      state.status = 'loading';
      state.chat.push(action.payload); // Add message with null response
      saveChatToLocalStorage(state.chat); // Save to localStorage
    },
    updateChatMessage: (state, action) => {
      const message = state.chat.find(msg => msg.id === action.payload.id);
      if (message) {
        message.response = action.payload.response;
      }
      state.status = 'idle';
      saveChatToLocalStorage(state.chat); // Save to localStorage
    },
    sendChatMessageFailed: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
      saveChatToLocalStorage(state.chat); // Save to localStorage
    },
  },
});

export const { sendChatMessageStart, updateChatMessage, sendChatMessageFailed } = chatSlice.actions;
export default chatSlice.reducer;
