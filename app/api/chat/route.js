import { NextResponse } from 'next/server'
import mongoose from 'mongoose'
import { getServerSession } from 'next-auth/next' // If using next-auth for session management
import Chat from '@/models/chatModel'
import User from '@/models/userModel'
import { connectToDb } from '@/db/connect'

// POST API route
export async function POST(request) {
  try {
    await connectToDB()

    const { userID, input, response } = await request.json()

    // Validate input
    if (!userID || !input || !response) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      )
    }

    // Fetch the user from the session
    const session = await getServerSession() // Adapt this to your authentication method
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Create new chat document
    const newChat = new Chat({
      userID: mongoose.Types.ObjectId(userID),
      input,
      response,
    })

    const savedChat = await newChat.save()

    // Update user's chatIDs
    await User.findByIdAndUpdate(
      session.user._id, // Assuming session.user._id contains the logged-in user's ID
      { $push: { chatIDs: savedChat._id } },
      { new: true },
    )

    return NextResponse.json(savedChat, { status: 201 })
  } catch (error) {
    console.error('Error saving chat data:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    )
  }
}
