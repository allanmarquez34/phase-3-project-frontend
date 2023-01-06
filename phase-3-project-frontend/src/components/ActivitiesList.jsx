import React from "react"
import ActivityCard from "./ActivityCard"

function ActivitiesList({activities, onActivityDelete}){

    const mappedActivities = activities.map(oneActivity => {
        return <ActivityCard key = {oneActivity.id} activities={oneActivity} onActivityDelete={onActivityDelete}/>
    })



    return(
        <div class="self-center items-center object-center">
            <div class="grid grid-cols-2 gap-5 m-10 items-center self-center justify-items-center">
                {mappedActivities}
            </div>
        </div>
    )




    
}

export default ActivitiesList