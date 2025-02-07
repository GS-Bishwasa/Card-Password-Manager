import { AddCard } from "@/components/add-card"
import { AddPassword } from "@/components/add-password"
import { YourCards } from "@/components/your-cards"
import { YourPasswords } from "@/components/your-passwords"

export default function Home() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">Add a Credit Card</h2>
          <AddCard />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">Add a Password</h2>
          <AddPassword />
        </div>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">Your Cards</h2>
          <YourCards />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">Your Passwords</h2>
          <YourPasswords />
        </div>
      </div>
    </div>
  )
}

