import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Menu from "./Menu";
const NavBar = (props) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                src="https://image.shutterstock.com/image-photo/image-260nw-664765378.jpg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav>
                <Menu 
                imgUrl = {props.imgUrl} 
                setImgUrl = {props.setImgUrl}>
                </Menu>
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
    </>
  );
};
export default NavBar;
