import { useState } from "react";


export default function Form(){
    let [fulName,setFulName]=useState("Daksh");

    let handelNameChange = (event) =>{
        console.log(event.target.value);
        setFulName(event.target.value);
    }

    return(
        <form >
            <input placeholder="Enter you Name"type="text" value={fulName} onChange={handelNameChange} />
            <br />
            <br />
            <button>Submit</button>
        </form>
    );
}