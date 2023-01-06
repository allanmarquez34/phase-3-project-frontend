import React from "react"
import { Link } from "react-router-dom";

function Home(){

    return(
        <div class="mx-20 my-10 bg-white bg-opacity-40 rounded-md">
            <div>
                <h1 class="text-6xl text-center font-Sacramento">Journey Into The Backwoods...</h1>
            </div>
            <div class="break-words m-10">
                <p class="text-center break-words m-12 font-Cormorant text-2xl">
                    Ever wonder what lies beyond the ordinary? What adventures await past the familiar? 
                    What else exists in the lesser-known pockets of America aside from cow-tipping?
                    How said cows actually live? How chickens live?! How overall-clad laypeople chewing on 
                    a piece of straw live?!?! You've come to the right place.
                    <br></br>
                    <br></br>
                    Beyond The Boonies is a hub for wayward travellers searching for a more provencial experience.
                    We're here to show you all the countryside and lesser-known places have to offer, and we're eager
                    to here about your pastoral discoveries as well. Safe travels, dear hayseed voyager. 
                    We can't wait to see what you do.                 
                </p>
            </div>
        </div>
    )
}

export default Home