import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'
let otpStore = {}

// Handle both login and OTP verification in a single API route
export async function POST(req) {
  try {
    const body = await req.json()
    const { email, otp } = body

    // Handle login
    if (email && !otp) {
      // Check if the email is valid and send OTP
      if (email !== '2021.nilanchala.panda@ves.ac.in') {
        return NextResponse.json({
          message: 'User credentials are incorrect',
          status: 404,
        })
      }

      // Generate a 6-digit OTP
      const generatedOtp = Math.floor(100000 + Math.random() * 900000)
      otpStore[email] = generatedOtp
      const otpExpires = Date.now() + 10 * 60 * 1000 // 10 minutes expiry

      // Set up Nodemailer to send OTP
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        service: 'gmail',
        auth: {
          user: process.env.SMTP_EMAIL,
          pass: process.env.SMTP_PASS,
        },
      })

      // Email content
      const mailOptions = {
        from: 'Your App <your-email@gmail.com>',
        to: email,
        subject: 'Your OTP for Verification',
        html: `
          <h1>OTP Verification</h1>
          <p>Your OTP code is <strong>${generatedOtp}</strong>.</p>
          <p>This OTP will expire in 10 minutes.</p>
        `,
      }

      // Send the email with OTP
      await transporter.sendMail(mailOptions)

      return NextResponse.json({
        message: 'OTP sent successfully. Please check your email.',
        status: 200,
      })
    }

    // Handle OTP verification
    if (otp && email) {
      const storedData = otpStore[email]

      if (storedData) {
        const { otp: storedOtp, otpExpires } = JSON.parse(storedData)

        // Check if OTP is valid and not expired
        if (otp === storedOtp && Date.now() < otpExpires) {
          delete otpStore[email]
          return NextResponse.json({
            message: 'OTP verified successfully.',
            status: 200,
          })
        }
      }

      // OTP is invalid or expired
      return NextResponse.json({
        message: 'Invalid or expired OTP.',
        status: 400,
      })
    }

    return NextResponse.json({
      message: 'Invalid request.',
      status: 400,
    })
  } catch (error) {
    console.error('Error during authentication:', error)
    return NextResponse.json(
      { error: 'An error occurred while processing your request.' },
      { status: 500 },
    )
  }
}
