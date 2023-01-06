import React from "react"
import ActivityCard from "./ActivityCard"

function ActivitiesList({activities, onActivityDelete, setSearchQuery}){

    const mappedActivities = activities.map(oneActivity => {
        return <ActivityCard key = {oneActivity.id} activities={oneActivity} onActivityDelete={onActivityDelete}/>
    })

    function handleChange(event){
        console.log(event.target.value)
        setSearchQuery(event.target.value)
    }



    return(
        <div>
            <h1>Activities</h1>
            <h3>seach by activity</h3>
            <input  className="search-bar" type="text" placeholder="Search..." onChange={handleChange}/>
            {mappedActivities}
        </div>
    )




    
}

export default ActivitiesList