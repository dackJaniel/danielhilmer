import { sql } from "drizzle-orm";
import {
    index,
    int,
    sqliteTableCreator,
    text,
} from "drizzle-orm/sqlite-core";

export const createTable = sqliteTableCreator((name) => `daniel-hilmer-next_${name}`);

export const projects = createTable(
    "projects",
    {
        id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
        image: text("image", { length: 256 }),
        name: text("name", { length: 256 }),
        description: text("description", { length: 256 }),
        createdAt: int("created_at", { mode: "timestamp" })
            .default(sql`(unixepoch())`)
            .notNull(),
        updatedAt: int("updatedAt", { mode: "timestamp" }).$onUpdate(
            () => new Date()
        ),
    },
);
