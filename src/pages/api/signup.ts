import type { APIContext } from 'astro'
import { generateId } from 'lucia'
import { Argon2id } from 'oslo/password'
import { db, User } from 'astro:db'
import { lucia } from '@/auth'
export async function POST(context: APIContext): Promise<Response> {
  //Parse the form data
  const data = await context.request.json()

  //Validate the form data
  if (!data.username || !data.password) {
    return new Response('Username and Password are required', { status: 400 })
  }

  if (typeof data.username !== 'string' || data.username.length < 4) {
    return new Response('Username must be at least 4 characters long', {
      status: 400,
    })
  }

  if (typeof data.password !== 'string' || data.password.length < 4) {
    return new Response('Password must be at least 4 characters long', {
      status: 400,
    })
  }

  // Insert user into db
  const userId = generateId(15)
  const hashedPassword = await new Argon2id().hash(data.password)

  await db.insert(User).values([
    {
      id: userId,
      username: data.username,
      email: data.email,
      phone: data.phone,
      password: hashedPassword,
    },
  ])

  // Generate session
  const session = await lucia.createSession(userId, {})
  const sessionCookie = lucia.createSessionCookie(session.id)
  context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)

  return context.redirect('/')
}
