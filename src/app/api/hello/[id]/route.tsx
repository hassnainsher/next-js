import { user } from "@/app/util/db";
import { NextResponse } from "next/server";

export async function GET(request:object,content:object): Promise<Response> {
    console.log("====================================__I'm content");
    console.log(content.params.id);
    console.log("====================================I'm content");
    const userData = user.filter((item)=>item.id==content.params.id);
    // return NextResponse.json({},{status:200})
    return NextResponse.json(
        userData.length ==0?{result:"No data found",success:false}
        :{result:userData[0],success:true},
        {status:200})
}