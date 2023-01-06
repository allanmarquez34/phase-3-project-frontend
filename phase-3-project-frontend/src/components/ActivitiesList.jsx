import React from "react"
import ActivityCard from "./ActivityCard"

function ActivitiesList({activities, onActivityDelete}){

    const mappedActivities = activities.map(oneActivity => {
        return <ActivityCard key = {oneActivity.id} activities={oneActivity} onActivityDelete={onActivityDelete}/>
    })



    return(
        <div>
            {mappedActivities}
        </div>
    )




    
}

export default ActivitiesList