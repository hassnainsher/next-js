import { NextResponse, NextRequest } from "next/server"; 

export default function middleware(req: NextRequest) { 
    // if (req.nextUrl.pathname !== "/about") {
        return NextResponse.redirect(new URL("/", req.url));
    // }
}
export const config={
    // matcher:["/about/:path*","/blog"]
    matcher:["/hello"]
}
