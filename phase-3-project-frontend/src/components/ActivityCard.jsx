import React from "react"
import { useHistory } from "react-router-dom"
import {  NavLink } from "react-router-dom";

function ActivityCard({activities, onActivityDelete, onSelectedActivity}){
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

    function handleClick() {
        onSelectedActivity(activities);
    }

    return(
        <div >
            <ul onClick = {handleSingleActivity}>
                <img src={image}/>
                <li>{title}</li>
                <li>{location}</li>
            </ul>
                <button onClick={handleDeleteClick}>Delete Activity</button>
            <NavLink exact to={`/${id}/edit`}>
                <button type="button" className="button-1" onClick={handleClick}>Edit Activity</button>
            </NavLink>
        </div>
    )
}

export default ActivityCard