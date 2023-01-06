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
        <div class="items-center content-center justify-items-center place-content-center place-items-center">
            <div class="justify-center content-center">
                <div class="justify-center items-center place-content-center place-items-center">
                    <img src={image} class="shadow rounded-full max-w-[300px] h-[300px] align-middle border-none" />
                </div>
                <div class="items-center object-center justify-center content-center place-items-center justify-items-center bg-white opacity-50 border-gray-900 rounded-xl">
                    <p class="text-center font-Sacramento text-3xl text-black">{title}</p>
                    <p class="text-center font-GreatVibes text-2xl text-black">{location}</p>
                </div>
            </div>
            <div class="self-center items-center object-center text-center font-Cinzel">
                <button class="text-center font-Cinzel rounded-full border-4 border-black text-white bg-black" onClick={handleDeleteClick}>Delete Activity</button>
            </div>
        </div>
    )
}

export default ActivityCard