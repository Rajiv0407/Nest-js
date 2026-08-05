"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { NextResponse } from "next/server";

export default function Home() {

    const [file,setFile]=useState();

    const  handleSubmit = async(e) =>{     
          e.preventDefault();
          const data = new FormData();
          data.set('file',file);
          let result = await fetch('http://localhost:3000/api/uploads',{
            method:'post',
            body:data
          });
          console.log(result);
          result =await  result.json();
          console.log(result);
          if(result.success){
            return NextResponse.json({message:'File Upladed Successfully!',success:true});
          }else{
             return NextResponse.json({message:'File  Not Upladed!',success:false});
          }
    }
  return (
    <div>
      <main >
           <h1>Upload Image</h1>

          <form onSubmit={handleSubmit}>
            <input type="file" onChange={(e)=>setFile(e.target.files?.[0])} name="file" />
            <button type="submit">Upload Image</button>
          </form>
       
        
      </main>
    </div>
  );
}
