// export async function GET(request){
//     return new Response('hello')
// }
import { user } from "@/app/util/db";
import { NextResponse } from "next/server";

// import { NextRequest } from "next/server";

export async function GET(request:object): Promise<Response> {
    console.log(request);
    const data = user;
    // return NextResponse.json({},{status:200})
    return NextResponse.json(data,{status:200})
}