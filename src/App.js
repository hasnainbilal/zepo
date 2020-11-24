import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Button from "./components/Button";
import "./Button.css";
import Today from "./components/Today";
import Week from "./components/Week";
import Month from "./components/Month";

function App() {
  return (
    <div className="App">
      <h1 style={{opacity:"0.2"}}>Activity</h1>
      <Button />
      <Switch>
                <Route exact path="/today" component={Today} />
                <Route exact path="/week" component={Week} />
                <Route exact path="/month" component={Month} />
                <Redirect to="/today" />
        </Switch>      
    </div>
  );
}

export default App;
