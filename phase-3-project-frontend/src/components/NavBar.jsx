import React from "react"
import { Link, NavLink } from "react-router-dom"

function NavBar(){

    return(
        <nav>
            <ul>
                <Link to="/">
                    Beyond the Boonies 
                </Link>
                <NavLink exact to="/activities">
                    Activites
                </NavLink>
                <NavLink exact to="/new">
                    Create Activity
                </NavLink>
            </ul>
        </nav>
    )
    
}

export default NavBar