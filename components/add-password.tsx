"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { KeyRound, Eye, EyeOff } from "lucide-react"

export function AddPassword() {
  const [showPassword, setShowPassword] = useState(false)
  const [passwordDetails, setPasswordDetails] = useState({
    website: "",
    username: "",
    password: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle password submission logic here
    console.log("Password details:", passwordDetails)
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <KeyRound className="h-5 w-5" />
          Add New Password
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="website">Website</Label>
            <Input
              id="website"
              placeholder="example.com"
              value={passwordDetails.website}
              onChange={(e) => setPasswordDetails({ ...passwordDetails, website: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Username / Email</Label>
            <Input
              id="username"
              placeholder="johndoe@example.com"
              value={passwordDetails.username}
              onChange={(e) => setPasswordDetails({ ...passwordDetails, username: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={passwordDetails.password}
                onChange={(e) => setPasswordDetails({ ...passwordDetails, password: e.target.value })}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          <Button type="submit" className="w-full">
            Add Password
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

