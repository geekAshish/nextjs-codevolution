import { type NextRequest } from "next/server";
import { headers, cookies } from 'next/headers';

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();

  // setting cookie using next/headers
  cookies().set('resultsPerPage', '30');

  // getting cookies value
  const theme = request.cookies.get('theme');
  console.log(theme);
  console.log(cookies().get('resultsPerPage'))
  

  // getting api header
  console.log(requestHeaders.get('Authorization')); // using request
  console.log(headerList.get('Authorization')); // using next/headers
  
  return new Response('<h1>To prevent conflict with page.tsx, move the route.ts file in a separate folder - api</h1>', {
    headers: {
      'Content-Type': 'text/html',
      'Set-Cookie': 'theme=dark', // setting cookies value with header
    }
  })
}
