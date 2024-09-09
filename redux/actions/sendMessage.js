import { sendChatMessageFailed, sendChatMessageStart, sendChatMessageSuccess } from "../slices/chatSlice";

export function sendChatMessage(data) {
  return async function (dispatch) {
    dispatch(sendChatMessageStart());

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
      
      // Assuming responseData contains a response message
      dispatch(sendChatMessageSuccess({ input: data.message, response: responseData.output }));
    } catch (error) {
      dispatch(sendChatMessageFailed(error.message));
    }
  };
}
