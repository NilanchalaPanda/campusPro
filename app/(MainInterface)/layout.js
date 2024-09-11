import UserLayout from '@/components/UserLayout'

export default function Layout({ children }) {
  return (
    <html lang='en'>
      <body>
        <UserLayout>{children}</UserLayout>
      </body>
    </html>
  )
}
