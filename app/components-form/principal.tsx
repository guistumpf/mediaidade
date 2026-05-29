"use client"

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
import Inputs from "./page";
import { useState, ReactNode } from "react";
import { AddInput } from "@/app/actions";


export default function CardDemo({children}: {children: ReactNode}) {

  const [nome, setnome] = useState("")
  const [idade, setidade] = useState<number>(Number)

async function HandleSubmit(){
   if(nome.trim() === "" ){
       await AddInput("Anônimo", idade)
   } 
   if (idade < 1){
    alert("Você provavelmente não tem menos de 1 ano de idade, tente novamente :)")
    return
   } if(idade >= 100){
    alert("Uau, você pode ser considerado um ancião! (Boa tentativa :) )")
  
   }
   


   await AddInput(nome, idade)
}



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
       {/* <AVERAGE/> */} {children}
            <Button type="submit" className="w-full cursor-pointer" onClick={HandleSubmit}>
              Envie sua idade!
            </Button>
          </CardFooter>
        </Card>
      </div>

    </>
  )
}


