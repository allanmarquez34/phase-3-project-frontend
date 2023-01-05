import React from "react"


function ActivityCard({activities, onActivityDelete}){
    const {id, title, location,image } = activities

    const handleDeleteClick = () => {
        onActivityDelete(id)
        fetch(`http://localhost:9292/delete/${id}`,{
            method: "DELETE"
        })

     
    }

    return(
        <div>
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