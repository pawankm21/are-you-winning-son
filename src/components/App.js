import { Fragment, useState } from "react";
import "./css/App.css";
import StressSlider from "./StressSlider";
import NavBar from "./Navbar";
import LoginForm from "./LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import Tips from "./Tips";
function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const loginClickHandler = () => {
    setShowLoginForm(true);
  };
  const logoutClickHandler = () => {
    setLoggedIn(false);
  };
  const closeForm = () => {
    setShowLoginForm(false);
  };
  const loginHandler = () => {
    setLoggedIn(true);
    setShowLoginForm(false);
  };
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
        <section>
          <Switch>
            <Route exact path="/">
              <Link to="/stress" id="panic-button" className="btn btn-lg btn-danger">Panic!!</Link>
            </Route>
            <Route  path="/stress">
              <StressSlider></StressSlider>
            </Route>
            <Route  path="/tips">
              <Tips/>
            </Route>
          </Switch>
        </section>
        {showLoginForm && (
          <LoginForm onClose={closeForm} onLogin={loginHandler} />
        )}
      </Fragment>
    </Router>
  );
}
export default App;
