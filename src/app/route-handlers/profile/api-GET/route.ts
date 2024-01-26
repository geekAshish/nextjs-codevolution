import { userDetails } from "./data"

export async function GET() {
  return Response.json(userDetails);
}