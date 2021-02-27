import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Error404, DashBoard } from "./page";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        <Route exact path="/dashboard" component={DashBoard} />
        <Route path="*" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
