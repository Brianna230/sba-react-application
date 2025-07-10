import React from "react"
import {Link} from 'react-router-dom'

function NavBar() {


  return (
  <>
    <ul className="nav-links">
        <li>
            <Link to ="/Catalog">Catalog</Link>
        </li>
        <li>
            <Link to ="/BreweryFinder">Brewery Finder</Link>
        </li>
        <li>
            <Link to ="/About">About</Link>
         </li>
        
    </ul>
  </>
  )
}

export default NavBar