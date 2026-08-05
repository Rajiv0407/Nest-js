import { user } from "@/app/util/db";
import { NextResponse } from "next/server";

export  function GET() {
    const data = user;
    return NextResponse.json(data,{status:200})
    
}
export async function POST(request,response){
    
    let payload = await request.json()
    console.log(payload);
    if(!payload.name || !payload.email || !payload.age ){
         return NextResponse.json({result:'required field not fond',success:false});
    }
    return NextResponse.json({result:payload,success:true});
}