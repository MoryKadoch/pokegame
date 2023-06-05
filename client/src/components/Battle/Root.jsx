import React from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./Reducers";
import BattleScreen from "./Screens/BattleScreen";

const store = createStore(rootReducer);

const Root = () => {
    return (
        <Provider store={store}>
            <Route element={<BattleScreen />} />
        </Provider>
    );
};

export default Root;
