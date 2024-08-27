import { connectToDb } from '@/db/connect'
import User from '@/models/userModel'

export const POST = async (req, res) => {
  try {
    // Connect to the database
    await connectToDb()

    // Parse the incoming request
    const {
      studentName,
      studentEmailAddress,
      studentPhoneNumber,
      studentCurrentLocation,
      examsTaken,
      preferredStreams,
      twelfthGradePercentage,
      tenthGradePercentage,
      collegeType,
      collegeRankingPreference,
      hostelRequirement,
      preferredStates,
      annualFamilyIncome,
      casteAndReservationQuota,
      defenceBackground,
      pwdQuota,
    } = await req.json()

    // Create a new user record
    const newUser = await User.create({
      name: studentName,
      emailAddress: studentEmailAddress,
      phoneNumber: studentPhoneNumber,
      currentLocation: studentCurrentLocation,
      tenthGradePercentage,
      twelfthGradePercentage,
      preferredStreams,
      examsTaken,
      collegeType,
      collegeRankingPreference,
      hostelRequirement: hostelRequirement === 'yes',
      preferredStates,
      annualFamilyIncome,
      eligibleForFinancialAid: !!annualFamilyIncome,
      casteAndReservationQuota,
      defenceBackground: {
        hasBackground: defenceBackground.hasBackground === 'yes',
        type: defenceBackground.type,
      },
      pwdQuota: pwdQuota === 'yes',
    })

    // console.log(newUser)
    await newUser.save()

    // Respond with the created user record
    return new Response(JSON.stringify(newUser), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (e) {
    console.log(e)
    return new Response(
      JSON.stringify({ message: 'Failed to create the new user' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
  }
}
