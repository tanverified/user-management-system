import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import AddUser from "./Components/AddUser";
import EditUser from "./Components/EditUser";
import NotFound from "./NotFound";
import User from "./Components/User";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/users/add" component={AddUser}/>
          <Route exact path="/users/edit/:id" component={EditUser}/>
          <Route exact path="/users/:id" component={User}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
