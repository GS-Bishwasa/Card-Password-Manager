import Navbar from '@/components/Navbar'
import { ThemeProvider } from "@/components/theme-provider"
import {Toaster} from "react-hot-toast"
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
            <Navbar/>
            <Toaster
  position="top-center"
  reverseOrder={false}
/>
            {children}
          </ThemeProvider>
          {/* <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn> */}
        </body>
      </html>
    </ClerkProvider>
  )
}