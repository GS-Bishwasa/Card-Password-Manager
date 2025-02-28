"use client"
import React from "react";
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { SignInButton } from "@clerk/nextjs";
import { SignedIn, SignedOut, SignUpButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
    const { theme, setTheme } = useTheme()


  return (
    <nav className="bg-purple-500 text-white flex justify-between items-center px-4 h-16 sticky ">
      <span>GSBPass</span>
      <ul className="flex gap-5 items-center justify-start">
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
      </ul>
      <div className="flex justify-center items-center gap-3">
       
      <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
        

     
       <Button className="text-foreground" variant="outline" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
    </div>
  </nav >
  
  
  
  )
}

export default Navbar