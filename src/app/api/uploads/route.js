import { NextResponse } from "next/server";
import { writeFile } from 'fs/promises'

export async function POST(req){
    const data= await req.formData();
     console.log(data);
    const file=data.get('file');
    if(!file){
      return NextResponse.json({message:'Image not Found',success:false});
    }

    const byteData=await file.arrayBuffer();
    const buffer= Buffer.from(byteData);
    const path=`./public/${file.name}`;  
    await writeFile(path,buffer);
    return NextResponse.json({message:'File Uploaded',success:true});

}