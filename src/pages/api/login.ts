import { lucia } from '@/auth'
import type { APIContext } from 'astro'
import { db, eq, User } from 'astro:db'
import { Argon2id } from 'oslo/password'
export async function POST(context: APIContext): Promise<Response> {
  //read the form data
  const data = await context.request.json()

  //validate the data
  if (typeof data.username !== 'string') {
    return new Response('Invalid username', {
      status: 400,
    })
  }
  if (typeof data.password !== 'string') {
    return new Response('Invalid password', {
      status: 400,
    })
  }

  //search the user
  const foundUser = (await db.select().from(User).where(eq(User.username, data.username))).at(0)

  //if user not found
  if (!foundUser) {
    return new Response('Incorrect username or password', { status: 400 })
  }

  // verify if user has password
  if (!foundUser.password) {
    return new Response('Invalid password', {
      status: 400,
    })
  }

  const validPassword = await new Argon2id().verify(foundUser.password, data.password)

  //If password is not valid
  if (!validPassword) {
    return new Response('Incorrect username or password', { status: 400 })
  }

  //Password is valid, user can log in
  const session = await lucia.createSession(foundUser.id, {})
  const sessionCookie = lucia.createSessionCookie(session.id)
  context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)

  return context.redirect('/')
}
