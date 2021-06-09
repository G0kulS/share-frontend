import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Switch, Route} from "react-router-dom";
import Mainpage from './Mainpage';
import Login from './login';
import Frontpage from './frontpage';
import Register from './Register';
import { ProfileDetails } from './Profilecontext';
import Forgetpassword from './forgetpassword';
import Resetpassword from './passwordreset';

function App() {
  return (<>
  <ProfileDetails>
  <Router>
  <Switch>
  <Route path="/" exact="true">
   <Frontpage></Frontpage>
  </Route>
  <Route path="/login" exact="true">
   <Login></Login>
  </Route>
  <Route path="/forgotpassword" exact="true">
   <Forgetpassword></Forgetpassword>
  </Route>
  <Route path="/resetpassword/:id" exact="true">
   <Resetpassword></Resetpassword>
  </Route>
  <Route path="/register" exact="true">
   <Register></Register>
  </Route>
  <Route path="/home" exact="true">
   <Mainpage></Mainpage>
  </Route>
  </Switch>
  </Router>
  </ProfileDetails>
  </>
    
  );
}

export default App;
