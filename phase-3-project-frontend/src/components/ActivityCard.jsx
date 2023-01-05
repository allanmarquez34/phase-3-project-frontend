import React from "react"


function ActivityCard({activities}){

    return(
        <div>
            <ul>
                <img src={activities.image}/>
                <li>{activities.title}</li>
                <li>{activities.location}</li>
            </ul>
        </div>
    )
}

export default ActivityCard