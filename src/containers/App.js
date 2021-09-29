import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { useHistory } from "react-router-dom";

import "./App.css";

import Options from "./options/Options";
import Toronto from "./toronto/Toronto";
import Churrita from "./churrita/Churrita";
import FiscalYear from "./fiscal-year/FiscalYear";

const App = () => {
  const history = useHistory();

  return (
    <div className="App">
      <Router basename="how-long">
        <Switch>
          <Route exact path="/churrita" component={Churrita}></Route>
          <Route exact path="/toronto" component={Toronto} />
          <Route exact path="/fiscal-year" component={FiscalYear} />
          <Route exact path="/" component={Options} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
