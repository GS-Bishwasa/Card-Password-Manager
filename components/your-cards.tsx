"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock data - replace with actual data from your backend
const cards = [
  {
    id: 1,
    cardNumber: "**** **** **** 1234",
    cardHolder: "John Doe",
    expiryDate: "12/25",
  },
  {
    id: 2,
    cardNumber: "**** **** **** 5678",
    cardHolder: "Jane Smith",
    expiryDate: "03/24",
  },
]

export function YourCards() {
  const handleDelete = (id: number) => {
    // Handle card deletion logic here
    console.log("Delete card:", id)
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5" />
          Saved Cards
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex items-center justify-between p-4 rounded-lg border bg-card text-card-foreground shadow-sm"
            >
              <div className="space-y-1">
                <p className="font-medium">{card.cardNumber}</p>
                <p className="text-sm text-muted-foreground">{card.cardHolder}</p>
                <p className="text-sm text-muted-foreground">Expires: {card.expiryDate}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-destructive hover:text-destructive hover:bg-destructive/10"
                onClick={() => handleDelete(card.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

