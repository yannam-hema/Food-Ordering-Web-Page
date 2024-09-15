import React from "react";
const Contact=()=>{
    return (
        <div className="text-center">
            <h1 className="font-bold p-4 m-4 ">
                Contact us
            </h1>
            <h3 className="p-2 m-2 ">
                ph:9876543210
            </h3>
            <h3 className="p-2 m-2">
                Email:hello@gmail.com
            </h3>
            
            <input placeholder="Any Compalints" className="border border-black"></input>
            <button className="bg-orange-300 hover:bg-orange-400 m-4 px-4 rounded-lg">Submit</button>
        </div>
    )
}
export default Contact;