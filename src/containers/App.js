import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { useHistory } from "react-router-dom";

import "./App.css";
import Toronto from "./toronto/Toronto";
import Churrita from "./churrita/Churrita";

const App = () => {
  const history = useHistory();

  return (
    <Router>
      <Switch>
        <Route exact path="/churrita" component={Churrita}></Route>
        <Route exact path="/toronto" component={Toronto} />
      </Switch>
    </Router>
  );
};

export default App;
