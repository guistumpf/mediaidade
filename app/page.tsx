import Image from "next/image";
import { Field } from "@base-ui/react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@base-ui/react";
import { Label } from "@/components/ui/label"
import Link from "next/link";


export default function CardDemo() {
  return (
    <>
    <Link href="/submissoes" className="fixed top-4 right-4 z-50">
    submissoes
  </Link>
   

    <div className="flex justify-center items-center h-dvh">
    <Card className="w-full max-w-sm mx-4">
      <CardHeader>
        <CardTitle>Média de Idade</CardTitle>
        <CardDescription>
          Envie sua idade para participar da média!
        </CardDescription>
        <CardAction>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Nome / Apelido</Label>
              <Input
                id="email"
                placeholder=" Opcional"
                required
                className="border white"
                />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Idade</Label>
               </div>
              <Input id="password"  placeholder=" Ex: 30" required className="border white"/>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
       Média Atual: {} anos
        <Button type="submit" className="w-full">
        Envie sua idade!
        </Button>
      </CardFooter>
    </Card>
                  </div>
               
                </>
  )
}


