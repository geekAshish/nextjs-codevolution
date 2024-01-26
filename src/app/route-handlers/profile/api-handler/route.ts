import { userDetails } from "./data"

export async function GET() {
  return Response.json(userDetails);
}

export async function POST(request: Request) {
  // accessing the request body
  const user = await request.json()

  const newUser = {
    id: userDetails.length + 1,
    name: user.name
  };

  userDetails.push(newUser);

  return new Response(JSON.stringify(userDetails), {
    headers: {
      'Content-Type': 'application/json',
    },
    status: 201,
  })
}