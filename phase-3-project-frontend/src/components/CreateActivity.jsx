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
        <section>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <h3>Add New Activity</h3>
                <label>Title</label>
                <input 
                id="title"
                name="title"
                onChange={handleChange}
                value={formData.title}/>

                <label>Description</label>
                <input
                id="description"
                name="description"
                onChange={handleChange}
                value={formData.description}/>

                <label>Location</label>
                <input
                id="location"
                name="location"
                onChange={handleChange}
                value={formData.location}/>

                <label>Image url</label>
                <input
                id="image"
                name="image"
                onChange={handleChange}
                value={formData.image}/>

                <button type="submit">Add Activity</button>
            </form>
        </section>
    )

}

export default CreateActivity