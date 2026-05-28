import { Label } from "@/components/ui/label"
import { Input } from "@base-ui/react"

type submissoes = {
    nome?: string,
    idade?: number
    placeholder: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string | number
    type?: string
}


export default function Inputs({ nome, idade, placeholder, value , type, onChange}: submissoes) {
    return (
        <Input
        onChange={onChange}    
        placeholder={placeholder}
        className="border white"
        value={value}
        type={type}
        required
        />

    )


}
