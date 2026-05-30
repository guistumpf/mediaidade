"use client"

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { IoChevronBackOutline } from "react-icons/io5";
export default function BackButton(){
const router = useRouter()
    return (
        <>
        <Button onClick={() => router.push("/") } className="bg-transparent hover:bg-white/10 text-white border-none shadow-none p-1 cursor-pointer">
                    <IoChevronBackOutline />
                </Button>
        </> 
    )
}