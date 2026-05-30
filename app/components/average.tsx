import { sql } from "drizzle-orm";
import { db } from "../db";



export default async function AVERAGE() {
        const dis = await db.execute(sql`SELECT AVG(idade) FROM media`)
const rawAvg = dis.rows[0]?.avg

const AVG =
  rawAvg == null || Number(rawAvg) === 0 || isNaN(Number(rawAvg))
    ? null
    : Number(rawAvg).toFixed(0)

return (
  <div>
    {AVG
      ? `Média Atual: ${AVG} anos de idade`
      : "Parece que ninguém enviou a idade, seja o primeiro! ;)"}
  </div>
)}