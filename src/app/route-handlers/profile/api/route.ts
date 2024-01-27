import { type NextRequest } from "next/server";
import { headers } from 'next/headers';

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();
  
  console.log(requestHeaders.get('Authorization'));
  console.log(headerList.get('Authorization'));
  
  return new Response('<h1>To prevent conflict with page.tsx, move the route.ts file in a separate folder - api</h1>', {
    headers: {
      'Content-Type': 'text/html',
    }
  })
}
