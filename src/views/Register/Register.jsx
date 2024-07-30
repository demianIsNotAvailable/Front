import React, { useContext, useEffect, useState } from "react";
import { registerUser } from "../../services/apiCalls";
import { useNavigate } from "react-router";
import { SampleContext } from "../../contexts/SampleContext/SampleContext";

export const Register = () => {
	const navigate = useNavigate()

	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	});

	const {setNumber, saludar} = useContext(SampleContext)

	function handleChange(e) {
		console.log("Handle Change");

		setCredentials((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	}

	async function register() {
		try {
			console.log(credentials);

			// validar la data voy a enviar

			// consumir la api
			const response = await registerUser(credentials)

			// su api devuelve ok redirigo a una pagina Dashboard
			if(response.success) {
				navigate('/login')
			} else {
				alert(response.message)
			}

			// Si la api devuelve false mostramos mensaje de error
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<h1>Register</h1>

			<input
				type="text"
				name="email"
				id=""
				placeholder="Email"
				onChange={handleChange}
			/>
			<input
				type="password"
				name="password"
				id=""
				placeholder="Password"
				onChange={handleChange}
			/>
			<input type="number" onChange={(e) => setNumber(e.target.value)}/>
			<input type="text" onChange={(e) => saludar(e.target.value)}/>
			<input type="button" value="Register" onClick={register} />
		</>
	);
};
