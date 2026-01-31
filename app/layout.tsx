import { RootProvider } from "fumadocs-ui/provider/next"
import "./global.css"
import { Inter } from "next/font/google"
import { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
// import { SearchDialog } from "@/components/my-search-dialog";
const inter = Inter({
  subsets: ["latin"],
})

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ? process.env.NEXT_PUBLIC_SITE_URL : "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: "%s | Magos Documentation",
    default: "Magos Docs — Professional Guide & API Reference",
  },
  description: "The official Magos documentation. Explore guides, API references, and resources for building with the Magos ecosystem.",
  openGraph: {
    title: "Magos Documentation",
    description: "Professional guides and API references for developers.",
    url: "",
    siteName: "Magos",
    images: [
      {
        url: "/logo-mago-org.png", // Tạo một cái ảnh 1200x630px bỏ vào thư mục public
        width: 1200,
        height: 630,
        alt: "Magos Documentation Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image", // Hiện ảnh to cho nó ngầu
    title: "Magos Documentation",
    description: "Professional guides and API references for developers.",
    images: ["/logo-mago-org.png"], // Dùng chung cái ảnh OpenGraph luôn
  },
  icons: {
    icon: "/icon.png",
  },
}

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          search={{
            enabled: true, // disable search entirely
            options: {
              api: "/api/search",
            }
          }}
        >
          <NextTopLoader
            color="var(--fd-primary)"
            initialPosition={0.08}
            crawlSpeed={200}
            height={1} // 3px là vừa đẹp, không quá dày, không quá mỏng
            showSpinner={false}
            easing="ease"
            speed={200}
            // Đây là linh hồn của Neon: Shadow đa lớp
            // Lớp 1: Sáng nhẹ xung quanh. Lớp 2: Lóe sáng rực.
            shadow="0 0 8px var(--fd-primary), 0 0 4px var(--fd-primary)"
          />
          {children}
        </RootProvider>
      </body>
    </html>
  )
}
