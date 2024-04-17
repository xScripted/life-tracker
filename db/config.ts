import { defineDb, defineTable, column } from 'astro:db'

const Lead = defineTable({
  columns: {
    name: column.text({ unique: true, required: true }),
    email: column.text({ unique: true, required: true }),
    phone: column.text({ unique: true, required: true }),
    message: column.text(),
  },
})

const User = defineTable({
  columns: {
    id: column.text({ primaryKey: true, unique: true, required: true }),
    username: column.text({ unique: true, required: true }),
    email: column.text({ unique: true, required: true }),
    phone: column.text({ required: true }),
    password: column.text(),
    role: column.text({ optional: true }),
  },
})

const Session = defineTable({
  columns: {
    id: column.text({ unique: true, required: true }),
    userId: column.text({ required: true, references: () => User.columns.id }),
    expiresAt: column.number({ required: true }),
  },
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    User,
    Session,
    Lead,
  },
})
