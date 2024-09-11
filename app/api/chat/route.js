import { NextResponse } from 'next/server'
import Chat from '@/models/chatModel'
import User from '@/models/userModel'
import { connectToDb } from '@/db/connect'

/*
This api will be used in ChatSectionComponent, BUT ONE THING TO REMEMBERS. First hit the user route.. get the userID (save it in local storage) and then hit this route and pass that userID saved in localstorage. This will happend only for FIRST TIME... 

const id = localStorage.getItem(userID);
if(!id){
  hit the user route.
  save userID in localStorage.
}

// THEN..
const id = localStorage.getItem(userID);
hit this route and pass the userID saved in localstorage, creating a new chat document. ALSO handle the voting: NULL and isValid: true... fields.
*/

export async function POST(request) {
  try {
    await connectToDb()

    const { userID, input, response, voting, isValid } = await request.json()
    console.log(userID, input, response, voting, isValid )
    // Validate input fields
    if (!userID || !input || !response || !voting || !isValid) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      )
    }
    console.log("first")

    const newChat = Chat.create({
      input,
      response,
      voting: 'None',
      isValid,
    })

    // Updating the chatIDs array in UserSchema
    await User.findByIdAndUpdate(
      userID,
      { $push: { chatIDs: newChat._id } },
      { new: true },
    )

    return NextResponse.json(newChat, { status: 201 })
  } catch (error) {
    console.error('Error saving chat data:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    )
  }
}
