import React,{useState,useEffect} from "react"

function Fetching() {
const[data, setData] = useState([])

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
    {data.map((beer)=> <p key={beer.id}>{beer.name},{beer.price},{beer.image && <img src={beer.image} className="beer-image"/>}</p>)}
 
 
  </div>
  )
}
export default Fetching