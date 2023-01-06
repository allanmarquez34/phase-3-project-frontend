import React from "react"
import { Link, NavLink } from "react-router-dom"

function NavBar(){

    return(
        <nav class="bg-white opacity-60">
            <div class="mx-8 px-8">
                <Link to="/" class="text-5xl font-Sacramento px-8">
                    Beyond the Boonies 
                </Link>
                <NavLink exact to="/activities" class="px-8 font-GreatVibes text-3xl">
                    Activites
                </NavLink>
                <NavLink exact to="/new" class="px-8 font-GreatVibes text-3xl">
                    Create Activity
                </NavLink>
            </div>
        </nav>
    )
}

export default NavBar