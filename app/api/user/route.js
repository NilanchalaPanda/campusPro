import { connectToDb } from '@/db/connect'
import User from '@/models/userModel'
import { NextResponse } from 'next/server'

/* THIS API WILL BE INTEGRATED IN TWO PLACES :
1) ChatSectionComponent : When user types his first query `new` document is created.
2) SmallUserProgile : PATCH request When user updates his details (for this userID must be there in localStorage) OR on the first visit he first creates his profile (new document will be create here.)
*/
export async function PUT(req) {
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

    await connectToDb()

    if (!userID) {
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
        status: 200,
      })
    } else {
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

      // Find the user by _id and update the document
      const updatedUser = await User.findByIdAndUpdate(userID, updateData, {
        new: true,
        runValidators: true,
        // upsert: true --> {To create a new document if one doesn’t exist, you would use the `upsert` option}
      })

      return NextResponse.json({
        message: 'User updated successfully',
        user: updatedUser,
        status: 200,
      })
    }
  } catch (error) {
    console.error('Error updating user:', error)
    return NextResponse.json(
      { error: 'An error occurred while updating the user.' },
      { status: 500 },
    )
  }
}
