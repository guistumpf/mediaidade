import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@base-ui/react"

export default function Home(){
  return <div>
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
                    <Input
                      type="text"
                    disabled
                      placeholder="Opcional"
                     />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Idade</Label>
                    </div>
                    <Input
                    placeholder="Ex: 30"
                     disabled
                    />
                  </div>
                </div>
              </form>
            </div >
          </CardContent>
          <CardFooter className="flex-col gap-2">
          
            <Button type="submit" className="w-full cursor-pointer" disabled>
              
            </Button>
          </CardFooter>
        </Card>
  </div>
}