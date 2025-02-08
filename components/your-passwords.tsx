"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { KeyRound, Trash2, Copy, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import toast from "react-hot-toast"
import Link from "next/link"

interface Password {
  website: string
  username: string
  password: string
}

export function YourPasswords({ passwords }: { passwords: Password[] }) {
  const [visiblePasswords, setVisiblePasswords] = useState<string[]>([])

  const togglePasswordVisibility = (website: string) => {
    setVisiblePasswords((prev) =>
      prev.includes(website) ? prev.filter((p) => p !== website) : [...prev, website]
    )
  }

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      toast.success("Password copied!") // Replace with toast notification if needed
    } catch (error) {
      toast.error("Failed to copy password")
    }
  }

  const handleDelete = (website: string) => {
    console.log("Delete password:", website)
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <KeyRound className="h-5 w-5" />
          Saved Passwords
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 h-44 overflow-scroll overflow-x-hidden custom-scrollbar">
          {passwords.map((item) => (
            <div
              key={item.website} // ✅ Unique Key
              className="flex flex-col space-y-2 p-4 rounded-lg border bg-card text-card-foreground shadow-sm"
            >
              <div className="flex items-center justify-between">
                <Link href={item.website} target="_blank">
                <h3  className="font-medium cursor-pointer text-blue-700 underline">{item.website}</h3>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-destructive hover:text-destructive hover:bg-destructive/10"
                  onClick={() => handleDelete(item.website)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">{item.username}</p>
              <div className="flex items-center gap-2">
                <Input
                  type={visiblePasswords.includes(item.website) ? "text" : "password"}
                  value={item.password}
                  readOnly
                  className="flex-1"
                />
                <Button variant="ghost" size="icon" onClick={() => togglePasswordVisibility(item.website)}>
                  {visiblePasswords.includes(item.website) ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
                <Button variant="ghost" size="icon" onClick={() => handleCopy(item.password)}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
