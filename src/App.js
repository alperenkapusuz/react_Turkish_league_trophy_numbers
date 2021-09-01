import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import Navi from "./components/navi/Navi"

function App() {
  return (
    <div>
      <Container>
        <Navi/>
      </Container>
    </div>
  );
}

export default App;
