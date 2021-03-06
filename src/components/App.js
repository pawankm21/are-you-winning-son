import { Fragment, useState } from "react";
import "./css/App.css";
import StressSlider from "./StressSlider";
import NavBar from "./Navbar";
import LoginForm from "./LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";
import Timer from "./Timer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Tips from "./Tips";
function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [val, setVal] = useState(10);
  const [imgUrl, setImgUrl] = useState("/images/campfire_vector.jpg");
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
            imgUrl = {imgUrl}
            setImgUrl = {setImgUrl}
          />
        </header>
        <section style = {{width: '100vw', height: '100vh', backgroundImage : `url(${imgUrl})`,"backgroundRepeat": "no-repeat",
"backgroundSize": "100% 100%"}}>
          <Switch>
            <Route exact path="/">
              <Link to="/stress" id="panic-button">
                Panic!!
              </Link>
            </Route>
            <Route path="/stress">
              <StressSlider val={val} setVal={setVal}></StressSlider>
            </Route>
            <Route path="/tips">
              <Timer duration={6*val}/>
              <Tips val={val} />
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
