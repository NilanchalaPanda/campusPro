import { sendChatMessageFailed, sendChatMessageStart, sendChatMessageSuccess, updateChatMessage } from "../slices/chatSlice";

export function sendChatMessage(data) {
  return async function (dispatch, getState) {
    const chatId = new Date().getTime(); // Unique identifier for the chat

    // Immediately dispatch the user message
    dispatch(sendChatMessageStart({ id: chatId, input: data.message, response: null }));

    try {
      const res = await fetch('https://langchain-agent-j6l2.onrender.com/search', {
        method: 'POST',
        body: JSON.stringify({ input: data.message }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error('Failed to send message');
      }

      const responseData = await res.json();
      
      // Update the message with the response once it's available
      dispatch(updateChatMessage({ id: chatId, response: responseData.output }));

      // Second API call (as mentioned before)
      // const isValid = !responseData.output.startsWith("I'm sorry");

      // await fetch('http://localhost:3000/api/admin', {
      //   method: 'POST',
      //   body: JSON.stringify({
      //     input: data.message,
      //     response: responseData.output,
      //     userId: data.userId,
      //     isValid: isValid,
      //   }),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });

    } catch (error) {
      dispatch(sendChatMessageFailed(error.message));
    }
  };
}
