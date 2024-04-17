import { db, Lead } from 'astro:db'

export async function GET() {
  const leads = await db.select().from(Lead)

  return new Response(JSON.stringify(leads))
}

export async function POST({ request }) {
  const data = await request.json()

  try {
    await db.insert(Lead).values({
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    })
  } catch (err) {
    return new Response(err, {
      status: 500,
    })
  }

  return new Response(null, {
    status: 200,
  })
}
