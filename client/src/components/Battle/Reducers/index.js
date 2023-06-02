import React from "react";
import { combineReducers } from "redux";
import { Provider } from "react-redux";
import { createStore } from "redux";
import TeamReducer from "./TeamReducer";
import BattleReducer from "./BattleReducer";

const rootReducer = combineReducers({
    team_selection: TeamReducer,
    battle: BattleReducer
});

const store = createStore(rootReducer);

const Root = () => {
    return (
        <Provider store={store}>
            <RootStack />
        </Provider>
    );
};

export default Root;