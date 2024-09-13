import { connectToDb } from '@/db/connect'
import User from '@/models/userModel'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const body = await req.json()
    const {
      name,
      phoneNumber,
      currentLocation,
      tenthGradePercentage,
      twelfthGradePercentage,
      preferredStreams,
      examsTaken,
      collegeType,
      casteAndReservationQuota,
      chatIDs,
    } = body

    await connectToDb()

    const user = await User.create({
      name,
      phoneNumber,
      currentLocation,
      tenthGradePercentage,
      twelfthGradePercentage,
      preferredStreams,
      examsTaken,
      collegeType,
      casteAndReservationQuota,
      chatIDs,
    })

    return NextResponse.json({
      message: 'User created successfully',
      user: user,
      status: 201,
    })
  } catch (error) {
    console.error('Error creating user:', error)
    return NextResponse.json(
      { error: 'An error occurred while creating the user.' },
      { status: 500 },
    )
  }
}

export async function PATCH(req) {
  try {
    const body = await req.json()
    const {
      userID,
      name,
      phoneNumber,
      currentLocation,
      tenthGradePercentage,
      twelfthGradePercentage,
      preferredStreams,
      examsTaken,
      collegeType,
      casteAndReservationQuota,
      chatIDs,
    } = body

    if (!userID) {
      return NextResponse.json(
        { error: 'UserID is required to update user details.' },
        { status: 400 },
      )
    }

    await connectToDb()

    const updateData = {
      ...(name && { name }),
      ...(phoneNumber && { phoneNumber }),
      ...(currentLocation && { currentLocation }),
      ...(tenthGradePercentage && { tenthGradePercentage }),
      ...(twelfthGradePercentage && { twelfthGradePercentage }),
      ...(preferredStreams && { preferredStreams }),
      ...(examsTaken && { examsTaken }),
      ...(collegeType && { collegeType }),
      ...(casteAndReservationQuota && { casteAndReservationQuota }),
      ...(chatIDs && { chatIDs }),
    }

    const updatedUser = await User.findByIdAndUpdate(userID, updateData, {
      new: true,
      runValidators: true,
    })

    if (!updatedUser) {
      return NextResponse.json({ error: 'User not found.' }, { status: 404 })
    }

    return NextResponse.json({
      message: 'User updated successfully',
      user: updatedUser,
      status: 200,
    })
  } catch (error) {
    console.error('Error updating user:', error)
    return NextResponse.json(
      { error: 'An error occurred while updating the user.' },
      { status: 500 },
    )
  }
}
