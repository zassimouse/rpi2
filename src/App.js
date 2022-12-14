import React from 'react';
import {HashRouter, Redirect, Route} from "react-router-dom";
import Person from "./pages/Person";
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar";
import Directors from "./pages/Directors";
import SetLangAttr from "./SetLangAttr";

const base = '/:locale(en|ru)';

const App = () => {
    return (
        <HashRouter>
            <Route path={base} component={NavigationBar} />
            <Route exact path={base} component={Home} />
            <Route exact path={`${base}/Directors`} component={Directors} />
            <Route exact path={`${base}/Directors/:id`} component={Person} />
            <Route exact path="/"><Redirect to="/en" /></Route>
            <SetLangAttr />
        </HashRouter>
    )
};

export default App;
