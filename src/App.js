import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Auth from './Components/Auth';
import Navbar from './Components/Navbar.js';
function App() {

  return (
    <>
    <div className="App">
      <Router>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      </div>
        <Switch>
        <Route exact path="/" component={Auth}/>
        <Route exact path="/Coder" component={Auth} />
        </Switch>
      </Router>
    </div>
    </>
  );
}

export default App;
