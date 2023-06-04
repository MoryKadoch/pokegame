import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokedex from "./components/Pokedex";
import SinglePokemon from "./components/SinglePokemon";
import Favorites from "./components/Favorites";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./components/Battle/Reducers";
import BattleScreen from "./components/Battle/Screens/BattleScreen";
import LoginScreen from "./components/Battle/Screens/LoginScreen";
import TeamSelectionScreen from "./components/Battle/Screens/TeamSelectionScreen";

const store = createStore(rootReducer);

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Pokedex />} />
                    <Route path="/pokemon/:name" element={<SinglePokemon />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/play" element={<LoginScreen />} />
                    <Route path="/battle" element={<BattleScreen />} />
                    <Route path="/team-select" element={<TeamSelectionScreen />} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
