import React from "react";
import { SignUp } from "@clerk/clerk-react";


export default function SignUpPage(){
    return <div className="w-screen h-screen bg-black flex justify-center items-center text-white"><SignUp path="/sign-in"/></div>
}