'use client'

import { SessionProvider } from 'next-auth/react'

const NextProvider = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>
}

export default NextProvider
