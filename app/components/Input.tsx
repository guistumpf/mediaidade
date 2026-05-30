import { Label } from "@/components/ui/label"
import { Input } from "@base-ui/react"

type submissoes = {
    placeholder: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: number | string
    type?: string
}


export default function Inputs({placeholder, value , type, onChange}: submissoes) {
    return (
        <Input
        onChange={onChange}    
        placeholder={placeholder}
        className="border white px-1.5"
        value={value}
        type={type}
        required
        />

    )


}
