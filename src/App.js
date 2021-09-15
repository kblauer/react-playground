import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

// app imports
import Tictactoe from "./labs/Tictactoe";
import Home from "./home/Home";
import TopBar from "./common/TopBar";

export default function App() {
    return (
        <Router>
            <TopBar/>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/ttt">
                    <Tictactoe />
                </Route>

            </Switch>
        </Router>
    )
}
