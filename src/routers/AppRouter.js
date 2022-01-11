import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Navbartop } from "../components/ui/Navbartop";
import { LoginScreen } from "../components/login/LoginScreen";
import { Home } from "../components/home/Home";
import { PartidosScreen } from "../components/partidos/PartidosScreen";
import { TorneosScreen } from "../components/torneos/TorneosScreen";
import { PremiosScreen } from "../components/premios/PremiosScreen";
import { ComoJugarScreen } from "../components/comojugar/ComoJugarScreen";
import { ApoyadoScreen } from "../components/apoyado/ApoyadoScreen";




export const AppRouter = () => {
  return (
    <Router>
    <div>
      <Navbartop />
      <Switch>
        <Route exact path="/login" component={ LoginScreen } />
        <Route exact path="/partidos" component={ PartidosScreen } />
        <Route exact path="/torneos" component={ TorneosScreen } />
        <Route exact path="/premios" component={ PremiosScreen } />
        <Route exact path="/comojugar" component={ ComoJugarScreen } />
        <Route exact path="/apoyado" component={ ApoyadoScreen } />

        

        <Route exact path="/" component={ Home } />

      </Switch>
    </div>
  </Router>  )
}

