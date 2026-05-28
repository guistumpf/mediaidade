"use client"
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
import { Label } from "@/components/ui/label"
import Link from "next/link";
import Inputs from "./components-form/page";
import { useState } from "react";

export default function CardDemo() {

  const [nome, setnome] = useState("")
  const [idade, setidade] = useState<number>(Number)

  console.log(nome, idade)
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
            < div >
              <form>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Nome / Apelido</Label>
                    <Inputs
                      type="text"
                      value={nome}
                      nome={nome}
                      placeholder=" Opcional"
                      onChange={(e) => {
                        setnome(e.target.value)
                      }}
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Idade</Label>
                    </div>
                    <Inputs
                      value={idade}
                      idade={idade}
                      placeholder=" Ex: 30 "
                      onChange={(e) => {
                        setidade(Number(e.target.value))
                        console.log(e.target.value)
                      }}
                    />
                  </div>
                </div>
              </form>
            </div >
          </CardContent>
          <CardFooter className="flex-col gap-2">
            Média Atual: { } anos
            <Button type="submit" className="w-full">
              Envie sua idade!
            </Button>
          </CardFooter>
        </Card>
      </div>

    </>
  )
}


