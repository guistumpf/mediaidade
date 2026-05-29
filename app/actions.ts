"use server"
import { sql } from "drizzle-orm";
import { db } from "./db";


export async function AddInput(nome?: string, idade?: number) {
  await db.execute(sql`INSERT INTO "media" (nome, idade) VALUES (${nome}, ${idade})`)

}

export async function AVG() {
    await db.execute(sql`SELECT AVG(idade) FROM media`)
}