import { Fragment, useState } from "react";
import "./css/App.css";
import StressSlider from "./StressSlider";
import Menu from './Menu';
import NavBar from "./Navbar";
import LoginForm from "./LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <Fragment>
      <header>
        <NavBar onClickLogin={loginClickHandler} onClickLogout={logoutClickHandler} loggedIn={loggedIn} />
      </header>
      <StressSlider></StressSlider>
      {showLoginForm && <LoginForm onClose={closeForm} onLogin={loginHandler} />}
      <Menu />
    </Fragment>
  );
}
export default App;
