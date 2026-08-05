import { connectionString } from "@/app/lib/db";
import { Product } from "@/app/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    const conn = await mongoose.connect(connectionString);
    const data = await Product.find();
    console.log(data);
    return NextResponse.json({ result: data });

}

export async function POST(request) {
    try {

            const proInfo = await request.json();
            const conn = await mongoose.connect(connectionString);
            let product = new Product(proInfo);
            const result = await product.save();
            if (result) {
                return NextResponse.json({status:201,message:'Product Save Successfully',result:result,success:true});
            }
        
        } catch (error) {
              return NextResponse.json({status:400,message:'Bad request',success:false});
           
        }    
}