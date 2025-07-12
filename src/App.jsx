import { useEffect, useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import BeerCard from './Componment/beerCard'
import NavBar from './Componment/NavBar'
import Fetching from './Componment/Fetch'
import Cart from './Componment/Cart'





function App() {

  return (
  <div>
    <BeerCard />
    <NavBar />
    <Routes>
      <Route path='/' element={<div></div>}/>
      <Route path='/Catalog' element={<Fetching />}/>
      <Route path='/BreweryFinder' element={<div>Brewey Finder coming soon!</div>}/>
      <Route path='/About' element={<div>About Us Page</div>}/>
      <Route path ='/Cart' element={<Cart />}/>
    </Routes>
  </div>
  )
}

export default App
