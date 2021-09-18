import Modal from "./Modal";
const LoginForm = props => {
	const submitHandler = event => {
		event.preventDefault();
	};

	return (
        <Modal onClose={props.onClose}>
			<form className="form-group" action="" onSubmit={submitHandler}>
				<label className="form-label" htmlFor="username">Username</label>
				<input className="form-control" type="text" id="username" />
				<label className="form-label" htmlFor="password">Password</label>
				<input className="form-control" type="password" id="password" />
				<button className="btn btn-info mt-2" onClick={props.onLogin}>Login</button>
			</form>
		</Modal>
	);
};
export default LoginForm;
