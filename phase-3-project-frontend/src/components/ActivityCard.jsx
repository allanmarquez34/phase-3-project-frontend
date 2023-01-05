import React from "react"
import { useHistory } from "react-router-dom"

function ActivityCard({activities, onActivityDelete}){
    const {id, title, location,image } = activities
    const history = useHistory()

    const handleDeleteClick = () => {
        onActivityDelete(id)
        fetch(`http://localhost:9292/delete/${id}`,{
            method: "DELETE"
        })

     
    }

    function handleSingleActivity(){
        history.push(`/oneactivity/${id}`)
    }

    return(
        <div onClick = {handleSingleActivity}>
            <ul>
                <img src={image}/>
                <li>{title}</li>
                <li>{location}</li>
            </ul>
            <button onClick={handleDeleteClick}>Delete Activity</button>
        </div>
    )
}

export default ActivityCard