import React,{useState,useEffect} from "react"
import {useCart} from "./ShopCart"

function Fetching() {
const[data, setData] = useState([])
const {addToCart} = useCart()

useEffect(()=>{
    const fetchData = async ()=>{
         const response = await fetch('https://api.sampleapis.com/beers/ale')        
         const jsonData = await response.json();
         setData(jsonData)
         console.log(jsonData)
            
    };
    fetchData();
       
},[]);


  return (
  <div className="list-of-beers">
    <h2>🍺 List of Beers</h2>
    {data.map((beer)=> <p key={beer.id}>{beer.name},{beer.price},{beer.image && <img src={beer.image} className="beer-image"/>}<button onClick={() =>addToCart(beer)}>Add to Cart</button></p>)}
    
     
 
  </div>
  )
}
export default Fetching