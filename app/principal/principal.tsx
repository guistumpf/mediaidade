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
import Inputs from "../components/Input";
import { useState, ReactNode } from "react";
import { AddInput } from "@/app/actions";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { SiGoogleforms } from "react-icons/si";
import { PiListFill } from "react-icons/pi";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FaQuestionCircle } from "react-icons/fa";
import { RiSupabaseFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { BiSolidHappyBeaming } from "react-icons/bi";
import { TbSourceCode } from "react-icons/tb";

export default function CardDemo({ children }: { children: ReactNode }) {
  const [desativado, setdes] = useState(false)
  const [nome, setnome] = useState("")
  const [idade, setidade] = useState<number | "">("")

  async function HandleSubmit() {
    if (idade === "" || typeof idade !== "number") {
      alert("Por favor, insira sua idade.");
      return;
    }
    if (idade < 1 || idade >= 100) {
      const msg = idade < 1
        ? "Você provavelmente não tem menos de 1 ano de idade, tente novamente :)"
        : "Uau, você pode ser considerado um ancião! (Boa tentativa :) )";
      alert(msg);
      return;
    }

    const nomeFormatado = nome.trim() === "" ? "Anônimo" : nome;
    await AddInput(nomeFormatado, idade);
    alert("Idade enviada! Aguarde 10 segundos para fazer outra submissão.")
    setdes(true)
    setTimeout(() => setdes(false), 10000)
    setidade("")
    setnome("")
  }

  console.log(nome, idade)
  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <Link href="/submissions" className="flex ">
          <Button className="cursor-pointer hover:bg-[#7f2400]">
            Submissões | <SiGoogleforms />
          </Button>
        </Link>
      </div>
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
                      placeholder="Opcional"
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
                      placeholder="Ex: 30 "
                      onChange={(e) => {
                        const val = e.target.value;
                        if (val === "" || /^\d+$/.test(val)) {
                          setidade(val === "" ? "" : Number(val));
                        }
                      }}
                    />
                  </div>
                </div>
              </form>
            </div >
          </CardContent>
          <CardFooter className="flex-col gap-2">
            {children}
            <Button type="submit" className="w-full cursor-pointer" onClick={HandleSubmit} disabled={desativado}>
              {desativado ? "Aguarde..." : "Envie sua idade!"}
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="fixed bottom-4 right-4 z-50">
        <Dialog>
          <DialogTrigger>
            <Button type="button" className="rounded-full w-10 h-10 p-0 cursor-pointer hover:bg-[#7f2400]">
              <FaQuestionCircle />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>


                <h1 className="flex gap-2 items-center">Olá!
                  <BiSolidHappyBeaming />
                </h1>


              </DialogTitle>
              <DialogDescription>
                <h1 className=""> Projeto com components react e banco de dados postgres. Ainda não é um CRUD mas tá valendo!</h1>

                <h2 className="mt-2">Projeto criado com muita água e ar! :)</h2>
                <a href="https://github.com/guistumpf/mediaidade">
                  <TbSourceCode className="text-2xl mt-2 mb2 cursor-pointer" title="Código Fonte" />
                </a>

                <h1 className="mb-2 mt-2 font-bold">Tecnologias Utilizadas:</h1>
                <div className="flex justify-center gap-3">
                  <SiNextdotjs className="text-2xl" title="Next.Js" />
                  <RiSupabaseFill className="text-2xl" title="Supabase" />
                  <SiShadcnui className="text-2xl" title="Shadcn/ui" />
                  <IoLogoVercel className="text-2xl" title="Vercel" />
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}


