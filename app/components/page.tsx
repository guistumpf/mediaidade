"use server"

import { sql } from "drizzle-orm"
import { db } from "../db"
import { ReactNode } from "react";

export default async function Submissoes({children}: {children: ReactNode}) {
    const Dados = await db.execute(sql`SELECT id, nome, idade FROM "media"`)

    return (
        <>
            <div className=" pl-1 pt-2">
               {children}
              <h1 className="text-2xl font-bold mt-5" >Lista de Submissões enviadas</h1>
            </div>
            <div className="mt-4 pl-0">
                <ul className="flex flex-wrap content-start">
                    {(Dados.rows as unknown as Array<{ nome: string; idade: number; id: number }>).map(({ nome, idade, id }) => (
                        <li key={id} className="m-2 w-64">
                            Nome: {nome} | {idade} anos
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )

}
