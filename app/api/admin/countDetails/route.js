import { NextResponse } from 'next/server'
import User from '@/models/userModel'
import Chat from '@/models/chatModel'
import { connectToDb } from '@/db/connect'

// NEED TO BE TESTED FIRST

export async function GET() {
  try {
    await connectToDb()

    // Fetch the number of users
    const userCount = await User.countDocuments()

    // Fetch the number of unresolved queries (where response is empty or isValid is false)
    const unresolvedQueriesCount = await Chat.countDocuments({
      $or: [{ response: { $eq: '' } }, { isValid: false }],
    })

    // Fetch the number of questions asked (non-empty 'input' field in Chat)
    const questionsAskedCount = await Chat.countDocuments({
      input: { $ne: '' },
    })

    // Fetch the number of likes/dislikes (non-null 'voting' field in Chat)
    const feedbackCount = await Chat.countDocuments({
      voting: { $in: ['upVote', 'downVote'] },
    })

    // Return the stats
    return NextResponse.json({
      userCount,
      unresolvedQueriesCount,
      questionsAskedCount,
      feedbackCount,
    })
  } catch (error) {
    console.error('Error fetching stats:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    )
  }
}
