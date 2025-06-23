import { useState } from "react";

export default function CommentsForms(){
    let [formData,setFormData]=useState({
        username:"",
        remark:"",
        rating:5
    })

    let handleInputChange =(event)=>{
        setFormData((currData)=>{
            return{...currData, [event.target.name]: event.target.value};
        });
    }

    let handleSubmit=(event)=>{
        console.log(formData);
        event.preventDefault();
        setFormData(formData);
    }
    return(
        <div>
            <h4>Give a comment</h4>
            <form onSubmit={handleSubmit} >
                <label htmlFor="username">Username</label>
                <input placeholder="username"type="text" value={formData.username} onChange={handleInputChange}
                id="username" name="username"/>
                <br />
                <br />
                <label htmlFor="remark">remark</label>
                <textarea value={formData.remark} placeholder="add few remarks"  onChange={handleInputChange}
                id="remark" name="remark">Comments</textarea>
                <br />
                <br />
                <label htmlFor="rating">rating</label>
                <input placeholder="rating"type="number" min={1} max={5} value={formData.rating}  onChange={handleInputChange}
                id="rating" name="rating"/>
                <br />
                <br />
                <button>Add Comments*</button>
            </form>
        </div>
    );
}