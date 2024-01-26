import { NextRequest } from "next/server";
import { userDetails } from "./data"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');

  const filteredUsers = query ? userDetails.filter(user => user.name.includes(query)) : userDetails;

  return Response.json(filteredUsers);
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