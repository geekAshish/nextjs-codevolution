import { userDetails } from "../data"

// dynamic route handler
export async function GET(request: Request, {params}: {params: {id: string}}) {
  const user = userDetails.find(user => user.id === parseInt(params.id))
  return Response.json(user);
}