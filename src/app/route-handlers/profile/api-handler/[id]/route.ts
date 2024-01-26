import { userDetails } from "../data"

// dynamic route handler
export async function GET(request: Request, {params}: {params: {id: string}}) {
  const user = userDetails.find(user => user.id === parseInt(params.id))
  return Response.json(user);
}


export async function PATCH(request: Request, {params}: {params: {id: string}}) {
  const body = await request.json();
  const {name} = body;

  const index = userDetails.findIndex(user => user.id === parseInt(params.id));
  userDetails[index].name = name;

  return Response.json(userDetails[index]);
}

export async function DELETE(request: Request, {params}: {params: {id: string}}) {
  const index = userDetails.findIndex(user => user.id === parseInt(params.id));
  const userDeleted = userDetails[index];
  userDetails.splice(index, 1);

  return Response.json(userDeleted);
}