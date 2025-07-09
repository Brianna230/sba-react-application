import React,{useState,useEffect} from "react"

function Fetching() {
const[data, setData] = useState(null)

useEffect(()=>{
    const fetchData = async ()=>{
         const response = await fetch('https://beer9.p.rapidapi.com/?brewery=Berkshire%20brewing%20company',
            {
                method:"GET",
                headers:{
                    "x-rapidapi-host": "beer9.p.rapidapi.com" ,
                    "x-rapidapi-key": "275f1468f4mshefc33408b964bd2p13d5b3jsnfbce4b3565be"

                },
          
            }
         )
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
  <div>
  /

 
  </div>
  )
}

export default Fetching