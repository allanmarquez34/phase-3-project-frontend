import React,{useState, useEffect} from "react"


function Review({ review }){

    const { id, rating, content, application_id } = review 




    return(
        <section>
        <ul>
            <li>{rating}</li>
            <li>{content}</li>
        </ul>

        {/* <form>
            <input type="text" id="rating" name="rating" value="rating">create review</input>
            <input type="text" id="content" name="content" value="content">what are your thoughts</input>
        </form> */}
        </section>
    )

}

export default Review