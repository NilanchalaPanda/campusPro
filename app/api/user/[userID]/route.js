import { connectToDb } from '@/db/connect'
import User from '@/models/userModel'
import { NextResponse } from 'next/server'

export async function GET(req, { params }) {
  try {
    // Connect to the database
    await connectToDb()

    const { userID } = params

    if (!userID) {
      return NextResponse.json({ error: 'userId is required' }, { status: 400 })
    }

    // Fetch the user by userId
    const user = await User.findById(userID)

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 200 })
    }

    // console.log(user)

    return NextResponse.json({ user }, { status: 200 })
  } catch (error) {
    console.error('Error fetching user:', error)
    return NextResponse.json(
      { error: 'An error occurred while fetching the user.' },
      { status: 500 },
    )
  }
}
