import { useState } from "react";

export default function Home(){
    const {name,setName}=useState("")
    const {ShowName,SetShowName}=useState("")
    const handleChange=(e) =>{
        setName(e.target.value);
    }
    const handleButton=()=>{
        SetShowName(name);
    }
    return(
        <div>
            <input type="text"
            placeholder="Enter Name"
            value={name}
            onChange={handleChange}
            />
            <button className="bd-blue border-1 w-10" onClick={handleButton}>Click ME!</button>
            <p>{ShowName}</p>
        </div>
    )
}