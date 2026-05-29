import { sql } from "drizzle-orm";
import { db } from "../db";



export default async function AVERAGE(){
 const dis = await db.execute(sql`SELECT AVG(idade) FROM media`)
const AVG = Number(dis.rows[0].avg).toFixed(0)

return(
        <div>
Média Atual: {(AVG)} anos de idade
           </div>
)
}