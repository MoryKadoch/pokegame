import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pokedex from './components/Pokedex'
import SinglePokemon from './components/SinglePokemon'
import Favorites from './components/Favorites'

import Header from "./components/Header"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemon/:name" element={<SinglePokemon />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
