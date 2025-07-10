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
// const fetchData = async ()=>{
    // const response = await fetch('https://beer9.p.rapidapi.com/?brewery=Berkshire%20brewing%20company' ,{
    // method:"GET",
    // headers:{
    //     "x-rapidapi-host": "beer9.p.rapidapi.com" ,
    //     "x-rapidapi-key": "275f1468f4mshefc33408b964bd2p13d5b3jsnfbce4b3565be"

  return (
  <div className="list-of-beers">
    <h2>List of Beers</h2>
    {data.map((beer)=> <p key={beer.id}>{beer.name},{beer.image && <img src={beer.image}/>}</p>)}

 
  </div>
  )
}
export default Fetching