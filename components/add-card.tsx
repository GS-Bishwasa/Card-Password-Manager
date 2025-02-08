"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { CreditCard } from "lucide-react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { addCardServer } from "@/actions/actions"
import { useUser } from "@clerk/nextjs"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  cardNumber: z
   .string()
   .min(16, { message: "Card number must be 16 digits." })
   .max(16, { message: "Card number must be 16 digits." })
   .regex(/^\d+$/, { message: "Card number must contain only numbers." }),
   
 holderName: z
   .string()
   .min(2, { message: "Card holder name must be at least 2 characters." })
   .max(50, { message: "Card holder name must be less than 50 characters." })
   .regex(/^[a-zA-Z\s]*$/, { message: "Name can only contain letters and spaces." }),

 expiryDate: z
   .string()
   .regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, {
     message: "Expiry date must be in MM/YY format.",
   })
   .refine((value) => {
     const [month, year] = value.split('/');
     const expiry = new Date(2000 + parseInt(year), parseInt(month) - 1);
     return expiry > new Date();
   }, { message: "Card has expired." }),
   
   cvv: z
   .string()
   .transform((val) => parseInt(val))
   .pipe(
     z.number()
       .min(100, { message: "CVV must be 3 or 4 digits." })
       .max(9999, { message: "CVV must be 3 or 4 digits." })
   )
})



export function AddCard() {
  const router = useRouter()
 const user = useUser()

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
defaultValues:{
  cardNumber:"",
  expiryDate:"",
  cvv: 0,
  holderName:""
}
  })


  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    if (user.user) {
      addCardServer(values.cardNumber,values.expiryDate,values.holderName,values.cvv, user?.user?.id)
      toast.success("Card Added!")
      form.reset()
      router.refresh()
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5" />
          Add New Card
        </CardTitle>
      </CardHeader>
      <CardContent>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card Number</FormLabel>
                  <FormControl>
                    <Input placeholder="1234 5678 9012 3456" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                    This is your card number
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />


        <FormField
          control={form.control}
          name="holderName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Holder Name</FormLabel>
              <FormControl>
                <Input placeholder="Bill Gates" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your holder name
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
       

 <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="expiryDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expiry Date</FormLabel>
                  <FormControl>
                    <Input placeholder="MM/YY" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                    This is your expiry date
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />



            <FormField
              control={form.control}
              name="cvv"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CVV</FormLabel>
                  <FormControl>
                    <Input  placeholder="123" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                    This is your cvv
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
</div>


            <Button type="submit" className="w-full">Submit</Button>
          </form>
        </Form>








        
      </CardContent>
    </Card>
  )
}

