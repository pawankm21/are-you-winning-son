import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Menu from "./Menu";
const NavBar = (props) => {
	return (
		<>
			<Navbar bg="info">
				<Container>
					<Navbar.Brand href="#home">
						<img
							src="https://image.shutterstock.com/image-photo/image-260nw-664765378.jpg"
							width="30"
							height="30"
							className="d-inline-block align-top"
							alt="React Bootstrap logo"
                        />
					</Navbar.Brand>
					<div>
                        <Menu/>
						{!props.loggedIn && <button className="btn btn-outline-dark" onClick={props.onClickLogin}>Login</button>}
                        {props.loggedIn && <button className="btn btn-outline-secondary" onClick={props.onClickLogout}>Logout</button>}
					</div>
				</Container>
			</Navbar>
		</>
	);
};
export default NavBar;
