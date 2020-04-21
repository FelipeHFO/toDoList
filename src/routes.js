import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./pages/Home"
import Contato from "./pages/Contato"

const Routes = () => 
(<BrowserRouter>
    <Switch>
        <Route exect path="/contato" component={Contato}></Route>
        <Route exect path="/" component={Home}></Route>
    </Switch>
</BrowserRouter>)

// A rota '/' somente barra deve ser por último

export default Routes
