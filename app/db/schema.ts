import { pgTable, bigint, timestamp, text } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const media = pgTable("media", {
  id: bigint({ mode: "number" })
    .primaryKey()
    .generatedByDefaultAsIdentity(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  nome: text().default(""),           // ← was .default(')  (unclosed string)
  idade: bigint({ mode: "number" })
    .default(sql`'0'`)
    .notNull(),                       // ← removed stray leading spaces
});