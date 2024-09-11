import UserLayout from '@/components/UserLayout'

export default function Layout({ children }) {
  return (
    <div>
      <UserLayout>{children}</UserLayout>
    </div>
  )
}
