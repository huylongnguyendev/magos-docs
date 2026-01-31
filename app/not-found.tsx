import Link from "next/link"

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-6xl font-bold text-fd-primary">404</h1>
      <p className="mt-4 text-lg text-fd-muted-foreground">Page Not Found!</p>
      <Link href="/docs" className="mt-6 px-4 py-2 bg-fd-primary text-fd-primary-foreground rounded-md">
        Go to the Documentation
      </Link>
    </div>
  )
}

export default NotFound