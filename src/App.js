import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Coder from './Pages/Coder.js';
import Login from './Pages/Login.js';
import Signup from './Pages/Signup.js';
import Navbar from './Components/Navbar.js';

function App() {
  return (
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
        <h1>SEMOCoder</h1>
      </div>
        <Switch>
        <Route exact path="/" component={Coder}/>
        <Route exact path="/Coder" component={Coder} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
