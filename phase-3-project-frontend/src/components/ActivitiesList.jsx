import React from "react"
import ActivityCard from "./ActivityCard"

function ActivitiesList({activities}){

    const mappedActivities = activities.map(oneActivity => {
        return <ActivityCard key = {oneActivity.id} activities={oneActivity}/>
    })

    return(
        <div>
            {mappedActivities}
        </div>
    )




    
}

export default ActivitiesList