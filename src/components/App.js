import { Fragment, useState } from "react";
import "./css/App.css";
import StressSlider from "./StressSlider";
import Menu from './Menu';
import NavBar from "./Navbar";
import LoginForm from "./LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false)
  const loginClickHandler = () => {
    setShowLoginForm(true);
  }
  const logoutClickHandler = () => {
    setLoggedIn(false);
  }
  const closeForm = () => {
    setShowLoginForm(false);
  }
  const loginHandler = () => {
    setLoggedIn(true);
    setShowLoginForm(false);
  }
  return (
    <Router>
      <Fragment>
        <header>
          <NavBar
            onClickLogin={loginClickHandler}
            onClickLogout={logoutClickHandler}
            loggedIn={loggedIn}
          />
        </header>

        {showLoginForm && (
          <LoginForm onClose={closeForm} onLogin={loginHandler} />
        )}
      </Fragment>
      <Switch>
        <Route path="/">
          <StressSlider></StressSlider>
          <Menu />
        </Route>
        <Route path="/tips"></Route>
        <Route path="/forum"></Route>
      </Switch>
    </Router>
  );
}
export default App;
