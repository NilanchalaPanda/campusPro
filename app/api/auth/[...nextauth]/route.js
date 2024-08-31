// import { connectToDb } from '@/db/connect'
// import User from '@/models/userModel'
// import { compare } from 'bcryptjs'
// import NextAuth from 'next-auth'
// import CredentialsProvider from 'next-auth/providers/credentials'

// const handler = NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       async authorize(credentials, req) {
//         console.log('credentials - ', credentials)
//         if (!credentials.email || !credentials.name || !credentials.phone) {
//           throw new Error('Entered credentials are invalid')
//         }

//         await connectToDb()

//         // console.log(credentials.email);
//         // console.log(credentials.password);

//         const user = await User.findOne({
//           email: credentials.email,
//         })

//         console.log('User', user)

//         if (!user || !user.emailAddress) {
//           throw new Error('User not found')
//         }

//         return user
//       },
//     }),
//   ],

//   secret: process.env.NEXTAUTH_SECRET,

//   callbacks: {
//     async session({ session }) {
//       console.log('Session : ', session)
//       const mongoDbUser = await User.findOne(
//         { emailAddress: session.user.emailAddress },
//         { name: 1, _id: 1 },
//       )
//       session.user.id = mongoDbUser._id.toString()

//       console.log('MongoDb User : ', mongoDbUser)

//       if (mongoDbUser) {
//         session.user = {
//           email: session.user.emailAddress,
//           name: mongoDbUser.name,
//           id: mongoDbUser._id,
//         }
//       }
//       console.log(session)

//       return session
//     },
//   },
// })

// export { handler as GET, handler as POST }

import { connectToDb } from '@/db/connect'
import User from '@/models/userModel'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials, req) {
        console.log('credentials - ', credentials)
        if (!credentials.email || !credentials.phone || !credentials.name) {
          throw new Error('Entered credentials are invalid')
        }

        await connectToDb()

        const user = await User.findOne({
          emailAddress: credentials.email,
        })

        console.log('USER', user)

        if (!user) {
          throw new Error('User not found')
        }

        console.log({
          name: user.name,
          email: user.emailAddress,
          id: user._id,
        })

        return user
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async session({ session }) {
      console.log('SESSION : ', session.user)

      const mongoDbUser = await User.findOne({
        emailAddress: session.user.email,
      })

      if (mongoDbUser) {
        session.user = {
          email: mongoDbUser.emailAddress,
          name: mongoDbUser.name,
          id: mongoDbUser._id.toString(),
        }
      } else {
        console.log('User not found in MongoDB')
      }

      console.log('Updated SESSION : ', session)
      return session
    },
  },
})

export { handler as GET, handler as POST }
