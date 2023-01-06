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
        <div class="items-center content-center justify-items-center place-content-center place-items-center">
            <ul onClick = {handleSingleActivity}>
                <li class="justify-center content-center">
                    <div class="justify-center items-center place-content-center place-items-center">
                        <img src={image} class="shadow rounded-full max-w-[300px] h-[300px] align-middle border-none"/>
                    </div>
                </li>
                <li class="items-center object-center justify-center content-center place-items-center justify-items-center bg-white opacity-50 border-gray-900 rounded-xl">
                    <p class="text-center font-Sacramento text-3xl text-black">{title}</p>
                    <p class="text-center font-GreatVibes text-2xl text-black">{location}</p>
                </li>
            </ul>
            <div class="self-center items-center object-center text-center font-Cinzel m-2 px-1">
                <button class="text-center font-Cinzel rounded-full border-4 border-black text-white bg-black opacity-60" onClick={handleDeleteClick}>Delete Activity</button>
                <NavLink exact to={`/${id}/edit`}>
                    <button type="button" class="text-center font-Cinzel rounded-full border-4 border-black text-white bg-black opacity-60" onClick={handleClick}>Edit Activity</button>
                </NavLink>
            </div>
        </div>
    )
}

export default ActivityCard