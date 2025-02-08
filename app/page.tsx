import { AddCard } from "@/components/add-card"
import { AddPassword } from "@/components/add-password"
import { YourCards } from "@/components/your-cards"
import { YourPasswords } from "@/components/your-passwords"
import { Metadata } from "next"
import { currentUser } from "@clerk/nextjs/server"

export const metadata: Metadata = {
  title: 'NoPass - Home',
  description: 'Home page for Password Managerre',
}


export default async function Home() {
  const user =await currentUser()
  console.log(user?.privateMetadata)
  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-2 mx-8">
          <h2 className="text-2xl font-bold tracking-tight">Add a Credit Card</h2>
          <AddCard />
        </div>
        <div className="space-y-2 mx-8">
          <h2 className="text-2xl font-bold tracking-tight">Add a Password</h2>
          <AddPassword />
        </div>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-2 mx-8">
          <h2 className="text-2xl font-bold tracking-tight">Your Cards</h2>
          <YourCards cards={Array.isArray(user?.privateMetadata.cards)? user?.privateMetadata.cards:[]}/>
        </div>
        <div className="space-y-2 mx-8">
          <h2 className="text-2xl font-bold tracking-tight">Your Passwords</h2>
          <YourPasswords passwords={Array.isArray(user?.privateMetadata.passwords)?user?.privateMetadata.passwords:[]}/>
        </div>
      </div>
    </div>
  )
}

