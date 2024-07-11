import React from "react";
export default function Button({onClick,label}){
    return(
        <div>
            <button onClick={onClick} className="btn">{label}</button> 
        </div>
    )
}