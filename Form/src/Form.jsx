import {  useState } from "react";


export default function Form(){
    let [formData,setFormdata]=useState(
        {
            fulName:"",
            userName:"",
            password:"",
        }
    );
    // let [fulName,setFulName]=useState("");

    // let handelNameChange = (event) =>{
    //     console.log(event.target.value);
    //     setFulName(event.target.value);
    // }

    let handleInputChange =(event)=>{
        let fieldName=event.target.name;
        let newValue=event.target.value;
        // console.log(feildName);
        setFormdata((currData)=>{
            currData[fieldName]=newValue;
            return{ ...currData };
        });

    };

    let handleSubmit =(event)=>{
        event.preventDefault();
        setFormdata( {
            fulName:"",
            userName:"",
            password:"",
        });
    }

    return(
        <form  onSubmit={handleSubmit}>
            <label htmlFor="fulName" >Full Name</label>
            <input placeholder="Enter you Name"type="text" value={formData.fulName} onChange={handleInputChange}
            id="fulName" 
            name="fulName"/>
            <br />
            <br />
            <label htmlFor="userName" >User Name</label>
            <input placeholder="Enter you userName"type="text" value={formData.userName} onChange={handleInputChange}
            id="userName" 
            name="userName" />
            <br />
            <br />
            <label htmlFor="password" >User password</label>
            <input placeholder="Enter you password"type="text" value={formData.password} onChange={handleInputChange}
            id="password" 
            name="password" />
            <br />
            <br />
            <button>Submit</button>
        </form>
    );
}