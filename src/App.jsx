import { useEffect, useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import BeerCard from './Componment/beerCard'
import NavBar from './Componment/NavBar'
import Fetching from './Componment/fetch'

// useEffect(() =>{
//   const fetchData = async () =>{
//    try{
//     const response = await fetch("https://beer9.p.rapidapi.com/beer/{id}")
//     const result = await response.json();

//    }catch{

//    }
//   }
// })


function App() {

  return (
  <div>
    <Routes>
      <Route path='/' element={<div></div>}/>
      <Route path='/Catalog' element={<div></div>}/>
      <Route path='/BreweryFinder' element={<div></div>}/>
    </Routes>
  <BeerCard />
  <NavBar />
  <Fetching /> 
  </div>
  )
}

export default App
