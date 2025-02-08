"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CardProps {
  cardNo: string,
  holdername: string,
  expiry: string
}

export function YourCards({ cards }: { cards: CardProps[] }) {
  const handleDelete = async (cardNo: string) => {
    try {
      // You can add your API call here to delete the card
      // Example:
      // await deleteCard(cardNo);
      console.log("Deleting card:", cardNo)

      // You might want to trigger a refresh of the cards list
      // or update the local state after successful deletion
    } catch (error) {
      console.error("Error deleting card:", error)
    }
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
        <div className="space-y-4 h-44 overflow-scroll overflow-x-hidden custom-scrollbar">
          {cards.map((card, index) => (
            <div key={`${card.cardNo}-${index}`}
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
                onClick={() => handleDelete(card.cardNo)}
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

