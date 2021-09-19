import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Menu from "./Menu";
const NavBar = (props) => {
  return (
    <div
      style={{
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
      }}
    >
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <span style={{color:"black"}}>  <i className="fas fa-smile-beam fa-2x"></i></span>
            
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav>
                <Menu imgUrl={props.imgUrl} setImgUrl={props.setImgUrl}></Menu>
              </Nav>

              {!props.loggedIn && (
                <button
                  className="btn btn-outline-dark mx-1"
                  onClick={props.onClickLogin}
                >
                  Login
                </button>
              )}
              {props.loggedIn && (
                <button
                  className="btn btn-ouline-dark mx-1"
                  onClick={props.onClickLogout}
                >
                  Logout
                </button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBar;
