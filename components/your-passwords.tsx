"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { KeyRound, Trash2, Copy, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Mock data - replace with actual data from your backend
const passwords = [
  {
    id: 1,
    website: "example.com",
    username: "johndoe@example.com",
    password: "password123",
  },
  {
    id: 2,
    website: "github.com",
    username: "janedoe",
    password: "securepass456",
  },
]

export function YourPasswords() {
  const [visiblePasswords, setVisiblePasswords] = useState<number[]>([])

  const togglePasswordVisibility = (id: number) => {
    setVisiblePasswords((prev) => (prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]))
  }

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text)
    // You might want to add a toast notification here
  }

  const handleDelete = (id: number) => {
    // Handle password deletion logic here
    console.log("Delete password:", id)
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
        <div className="space-y-4">
          {passwords.map((item) => (
            <div
              key={item.id}
              className="flex flex-col space-y-2 p-4 rounded-lg border bg-card text-card-foreground shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{item.website}</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-destructive hover:text-destructive hover:bg-destructive/10"
                  onClick={() => handleDelete(item.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">{item.username}</p>
              <div className="flex items-center gap-2">
                <Input
                  type={visiblePasswords.includes(item.id) ? "text" : "password"}
                  value={item.password}
                  readOnly
                  className="flex-1"
                />
                <Button variant="ghost" size="icon" onClick={() => togglePasswordVisibility(item.id)}>
                  {visiblePasswords.includes(item.id) ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
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

