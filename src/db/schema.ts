import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { createId } from '@paralleldrive/cuid2'
import { integer } from "drizzle-orm/pg-core";

export const goals = pgTable('goals', {
    id: text('id').primaryKey().$defaultFn(() => createId()),
    title: text('title').notNull(),
    frequenci: integer('frequenci').notNull(),
    createdId: timestamp('createdId', { withTimezone: true }).notNull().defaultNow()
})

export const goalsCompletions = pgTable('goalsC>ompletions', {
    id: text('id').primaryKey().$defaultFn(() => createId()),
    goalsId: text('goals_id').references(() => goals.id).notNull(),
    createAt: timestamp('createAt', { withTimezone: true }).notNull().defaultNow()
})
