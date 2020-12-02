import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Auth from './Components/Auth';
import Coder from './Pages/Coder.js';
import Navbar from './Components/Navbar.js';
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';
function App() {

  return (
    <>
    <LoginButton/>
    <LogoutButton/>
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
        <Route exact path="/" component={Auth}/>
        <Route exact path="/Coder" component={Auth} />
        </Switch>
      </Router>
    </div>
    </>
  );
}

export default App;
