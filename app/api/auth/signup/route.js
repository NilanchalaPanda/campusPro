import { connectToDb } from '@/db/connect'
import User from '@/models/userModel'
import twilio from 'twilio'

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

    // Your Twilio account SID and auth token from Twilio Console
    const accountSid = process.env.ACCOUNTSID
    const authToken = process.env.AUTHTOKEN

    const client = new twilio(accountSid, authToken)

    async function sendMessage() {
      const messageBody = `
            Hello ${studentName},

            Welcome to CampusPro! 🎓 We’re thrilled to have you on board as you embark on your educational journey. Here at CampusPro, we’re committed to providing you with the best resources and support to help you achieve your academic goals. Whether you're preparing for your next big exam or exploring new study opportunities, we’re here to guide you every step of the way. Our AI-driven tools are designed to help you with personalized study plans, exam tips, and real-time assistance whenever you need it.

            Feel free to reach out to us through this chat anytime you have questions or need assistance. We're excited to see where your hard work and dedication will take you!

Let’s achieve great things together!

Best Regards,  
The CampusPro Team
            `

      console.log('From address :', process.env.TWILIONUMBER)
      try {
        const message = await client.messages.create({
          body: messageBody,
          from: `whatsapp:${process.env.TWILIONUMBER}`,
          to: `whatsapp:+91${studentPhoneNumber}`,
        })

        console.log(`Message sent with SID: ${message.sid}`)
      } catch (error) {
        console.error('Error sending message:', error)
      }
    }

    sendMessage()

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
