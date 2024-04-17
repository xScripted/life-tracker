import { defineDb, defineTable, column } from 'astro:db'

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

const Event = defineTable({
  columns: {
    id: column.text({ primaryKey: true, unique: true, required: true }),
    title: column.text(),
    description: column.text(),
    category: column.text(),
    priority: column.number(),
    initDate: column.date(),
    endDate: column.date(),
  },
})

const Diet = defineTable({
  columns: {
    id: column.text({ primaryKey: true, unique: true, required: true }),
    title: column.text(),
    owner: column.text({ references: () => User.columns.id }),
    monday: column.json(),
    tuesday: column.json(),
    wednesday: column.json(),
    thursday: column.json(),
    friday: column.json(),
    saturday: column.json(),
    sunday: column.json(),
    public: column.boolean(),
  },
})

const Menu = defineTable({
  columns: {
    id: column.text({ primaryKey: true, unique: true, required: true }),
    title: column.text(),
  },
})

const Ingredient = defineTable({
  columns: {
    id: column.text({ primaryKey: true, unique: true, required: true }),
    name: column.text(),
    image: column.text(),
    carbohidratos: column.number({ default: 0 }),
    proteinas: column.number({ default: 0 }),
    grasas: column.number({ default: 0 }),
    fibra: column.number({ default: 0 }),
    agua: column.number({ default: 0 }),
    azucar: column.number({ default: 0 }),
    sal: column.number({ default: 0 }),

    vitaminaA: column.number({ default: 0 }),
    vitaminaB1: column.number({ default: 0 }),
    vitaminaB2: column.number({ default: 0 }),
    vitaminaB3: column.number({ default: 0 }),
    vitaminaB5: column.number({ default: 0 }),
    vitaminaB6: column.number({ default: 0 }),
    vitaminaB7: column.number({ default: 0 }),
    vitaminaB9: column.number({ default: 0 }),
    vitaminaB12: column.number({ default: 0 }),
    vitaminaC: column.number({ default: 0 }),
    vitaminaD: column.number({ default: 0 }),
    vitaminaE: column.number({ default: 0 }),
    vitaminaK: column.number({ default: 0 }),

    calcio: column.number({ default: 0 }),
    hierro: column.number({ default: 0 }),
    magnesio: column.number({ default: 0 }),
    potasio: column.number({ default: 0 }),
    zinc: column.number({ default: 0 }),
    yodo: column.number({ default: 0 }),
  },
})

const MenuIngredient = defineTable({
  columns: {
    menuId: column.text({ references: () => Menu.columns.id }),
    ingredienteId: column.text({ references: () => Ingredient.columns.id }),
    cantidad: column.number(),
  },
})

const Wardrobe = defineTable({
  columns: {
    id: column.text({ primaryKey: true, unique: true, required: true }),
    desgaste: column.text(),
    temporada: column.text(),
    color: column.text(),
    tipo: column.text(),
    estado: column.text(),
    usos: column.number(),
    nLavado: column.number(),
    owner: column.text({ references: () => User.columns.id }),
  },
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    User,
    Session,
    Event,
    Diet,
    Menu,
    Ingredient,
    MenuIngredient,
    Wardrobe,
  },
})
