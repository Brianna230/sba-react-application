import React from "react"
import {Link} from 'react-router-dom'
import { useCart } from "./ShopCart"


function NavBar() {
const {cartItems} = useCart()
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
         <li>
          <Link to ="/Cart">Add to Cart ({cartItems.length})</Link>
         </li>
        
    </ul>
  </>
  )
}

export default NavBar