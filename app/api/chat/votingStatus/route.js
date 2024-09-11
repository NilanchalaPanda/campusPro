import { NextResponse } from 'next/server'
import Chat from '@/models/chatModel'
import { connectToDb } from '@/db/connect'

export async function PATCH(request) {
  try {
    await connectToDb()

    const { chatID, voting } = await request.json()

    // Validate input
    if (!chatID || !voting || !['upVote', 'downVote'].includes(voting)) {
      return NextResponse.json(
        { error: 'Invalid input: Missing chatID or invalid voting value' },
        { status: 400 },
      )
    }

    // Update the voting status of the specified chat document
    const updatedChat = await Chat.findByIdAndUpdate(
      chatID,
      { voting },
      { new: true },
    )

    if (!updatedChat) {
      return NextResponse.json({ error: 'Chat not found' }, { status: 404 })
    }

    return NextResponse.json(updatedChat, { status: 200 })
  } catch (error) {
    console.error('Error updating voting status:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    )
  }
}
