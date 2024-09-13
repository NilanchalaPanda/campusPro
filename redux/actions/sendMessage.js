import {
  sendChatMessageFailed,
  sendChatMessageStart,
  sendChatMessageSuccess,
  updateChatMessage,
} from '../slices/chatSlice'

export function sendChatMessage(data) {
  return async function (dispatch, getState) {
    const chatId = new Date().getTime() // Unique identifier for the chat

    // Immediately dispatch the user message
    dispatch(
      sendChatMessageStart({ id: chatId, input: data.message, response: null }),
    )

    try {
      // Proceed with the chat message API call
      const res = await fetch(
        'https://langchain-agent-j6l2.onrender.com/search',
        {
          method: 'POST',
          body: JSON.stringify({ input: data.message }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      if (!res.ok) {
        throw new Error('Failed to send message')
      }

      const responseData = await res.json()

      // Update the message with the response once it's available
      dispatch(updateChatMessage({ id: chatId, response: responseData.output }))

      // Check for userID in localStorage
      let userID = localStorage.getItem('userID')

      // If userID is not found, hit the user route to get a new userID
      if (!userID) {
        const userRes = await fetch('http://localhost:3000/api/user', {
          method: 'POST',
          body: JSON.stringify({
            name: '',
            phoneNumber: 0,
            currentLocation: '',
            tenthGradePercentage: 0,
            twelfthGradePercentage: 0,
            preferredStreams: '',
            examsTaken: [],
            collegeType: 'Government',
            casteAndReservationQuota: 'General',
            chatIDs: [],
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        const userData = await userRes.json()
        if (!userRes.ok) throw new Error('Failed to create user')

        // Save new userID in localStorage
        userID = userData.user._id
        localStorage.setItem('userID', userID)
      }

      // Check if the response is valid
      // const isValid = !responseData.output.toLowerCase().includes("i'm sorry");
      const isValid = true
      console.log(isValid)
      // Second API call to store chat data

      const res2 = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        body: JSON.stringify({
          userID,
          input: data.message,
          response: responseData.output,
          voting: 'None',
          isValid,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const chatData = await res2.json()
      console.log(chatData)

      if (!res2.ok) throw new Error('Failed to save chat')
    } catch (error) {
      dispatch(sendChatMessageFailed(error.message))
    }
  }
}
