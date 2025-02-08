"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CardProps{
  cardNo:string,
  holdername:string,
  expiry:string
}

export function YourCards({cards}: {cards:CardProps[]}) {
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
          {cards.map((card: CardProps) => (
            <div
              key={card.cardNo}
              className="flex items-center justify-between p-4 rounded-lg border bg-card text-card-foreground shadow-sm"
            >
              <div className="space-y-1">
                <p className="font-medium">{card.cardNo}</p>
                <p className="text-sm text-muted-foreground">{card.holdername}</p>
                <p className="text-sm text-muted-foreground">Expires: {card.expiry}</p>
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

