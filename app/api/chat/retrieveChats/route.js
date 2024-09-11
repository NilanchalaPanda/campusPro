import { NextResponse } from 'next/server'
import User from '@/models/userModel'
import { connectToDb } from '@/db/connect'

/*
This will used in RetrieveChats tab.
*/

export async function POST(request) {
  try {
    await connectToDb()

    const { phoneNumber } = await request.json()

    // Validate the phone number
    if (!phoneNumber) {
      return NextResponse.json(
        { error: 'Phone number is required' },
        { status: 400 },
      )
    }

    const user = await User.findOne({ phoneNumber }).populate('chatIDs')

    if (user) {
      return NextResponse.json(user, { status: 200 })
    } else {
      return NextResponse.json(
        {
          message:
            'We could not find any preferences and chats associated with this Phone Number. Please begin by adding your preferences or starting a new conversation.',
        },
        { status: 404 },
      )
    }
  } catch (error) {
    console.error('Error checking phone number:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    )
  }
}
