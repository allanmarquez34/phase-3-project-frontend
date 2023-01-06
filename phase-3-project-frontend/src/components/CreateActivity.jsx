import React, { useState } from "react"
import { useHistory } from "react-router-dom"

function CreateActivity({onAddActivity}){
    const [formData, setFormData] = useState({
        title:"",
        description:"",
        location:"",
        image:""
    })

    const history = useHistory()

    function handleChange(event){
       setFormData({
        ...formData,
        [event.target.name]: event.target.value,
       })
    }

    function handleSubmit(){
        const newActivity = {
            title: formData.title,
            description: formData.description,
            location: formData.location,
            image: formData.image
        }

        fetch("http://localhost:9292/new",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(newActivity),
        })
        .then((r) => r.json())
        .then(onAddActivity)
        history.push(`/activities`)
    }

    return(
        <div class="self-center object-center items-center m-20 content-center place-content-center place-items-center">
            <div class="self-center object-center items-center text-center">
                <form autoComplete="off" onSubmit={handleSubmit} class="self-center items-center object-center content-center justify-center place-items-center">
                    <p class="text-center content-center font-Sacramento text-5xl">Add New Activity</p>
                    <br></br>
                    <label class="text-center bg-white opacity-60 rounded font-Parisienne text-2xl">Title</label>
                    <br></br>
                    <br></br>
                        <input 
                    class=""
                        id="title"
                        name="title"
                        onChange={handleChange}
                        value={formData.title}/>
                    <br></br>
                    <br></br>
                    <label class="text-center bg-white opacity-60 rounded font-Parisienne text-2xl">Description</label>
                    <br></br>
                    <br></br>
                        <input
                    class="h-48"
                        id="description"
                        name="description"
                        onChange={handleChange}
                        value={formData.description}/>
                    <br></br>
                    <br></br>
                    <label class="text-center bg-white opacity-60 rounded font-Parisienne text-2xl">Location</label>
                    <br></br>
                    <br></br>
                        <input
                    class=""
                        id="location"
                        name="location"
                        onChange={handleChange}
                        value={formData.location}/>
                    <br></br>
                    <br></br>
                    <label class="text-center bg-white opacity-60 rounded font-Parisienne text-2xl">Image url</label>
                    <br></br>
                    <br></br>
                        <input
                    class=""
                        id="image"
                        name="image"
                        onChange={handleChange}
                        value={formData.image}/>
                    <br></br>
                    <br></br>
                    <button type="submit" class="text-center bg-white rounded font-Parisienne text-2xl border-black border-2">Add Activity</button>
            </form>
            </div>
        </div>
    )
}

export default CreateActivity