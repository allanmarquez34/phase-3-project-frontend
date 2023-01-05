import React, { useState } from "react"
import { useHistory } from "react"

function CreateActivity({onAddActivity}){
    const [formdata, setFormData] = useState({
        title:"",
        description:"",
        location:"",
        image:""
    })

    const history = useHistory()

    function handlesubmit(){
        const newActivity = {
            title: formdata.title,
            description: formdata.description,
            location: formdata.location,
            image: formdata.image
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
        history.pushState(`/activities`)
    }


}

export default CreateActivity