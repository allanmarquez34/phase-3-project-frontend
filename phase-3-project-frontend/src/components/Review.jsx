import React from "react"

function Review({ review }){
    const { rating, content} = review 

    return(
        <section>
            <ul>
                <li>{rating}</li>
                <li>{content}</li>
            </ul>
        </section>
    )
}
export default Review