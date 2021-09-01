import React from "react";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navi from "./components/navi/Navi"
import LeagueCup from "./components/leagueCup/LeagueCup";
import ZiraatCup from "./components/ziraatCup/ZiraatCup"
import SuperCup from "./components/superCup/SuperCup";
import ChampionshipByCity from "./components/championshipByCity/ChampionshipByCity"

function App() {
  return (
    <div>
      <Container>
        <Navi/>
        <Router>
            <Switch>
              <Route path="/mainmenu" component={ChampionshipByCity}/>
              <Route path="/leaguecup/" component={LeagueCup} />
              <Route path="/ziraatcup/" component={ZiraatCup} />
              <Route path="/supercup/" component={SuperCup} />
            </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
