import AdminLayout from "@/components/AdminLayout"

export default function Layout({ children }) {
  return (
    <div>
      <AdminLayout>{children}</AdminLayout>
    </div>
  )
}
