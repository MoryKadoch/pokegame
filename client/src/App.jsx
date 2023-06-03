import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pokedex from './components/Pokedex'
import SinglePokemon from './components/SinglePokemon'
import Favorites from './components/Favorites'
import LoginScreen from './components/Battle/Screens/LoginScreen'
//import Play from './components/Play'


import Header from "./components/Header"
import Footer from "./components/Footer"
//import BattleScreen from './components/Battle/Screens/BattleScreen'
//import { connect } from "react-redux";
import Root from './components/Battle/Reducers/index'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Pokedex />} />
                <Route path="/pokemon/:name" element={<SinglePokemon />} />
                <Route path="/favorites" element={<Favorites />} />
                {<Route path="/play" element={<LoginScreen />} />}
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
