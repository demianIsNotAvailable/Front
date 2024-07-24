import { useState } from "react";
import { CInput } from "../../components/CInput/CInput";
import { loginUser } from "../../services/apiCalls";
import { jwtDecode } from "jwt-decode";

export const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    console.log("HandleChange");
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  async function login() {
    console.log("LOGIN");
    console.log(credentials);
	try {
		const response = await loginUser(credentials)

		if (response.success) {
			const decodedToken = jwtDecode(response.token)
			const passport = {
				token: response.token,
				tokenData: decodedToken
			}
			// guardamos en localstorage nuestro token y los datos que contiene
			localStorage.setItem("passport", JSON.stringify(passport))
		} else {
			alert(response.message)
		}
	} catch (error) {
		console.log(error)
	}
  }

  // OPCION 1
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // function handleChange(e) {
  // 	console.log("handleChange");

  // 	if (e.target.name === "email") {
  // 		setEmail(e.target.value);
  // 	}

  // 	if (e.target.name === "password") {
  // 		setPassword(e.target.value);
  // 	}
  // }

  // function login() {
  // 	console.log("LOGIN");

  // 	if (email.length === 0 || password.length === 0) {
  // 		return alert("Email and password are required");
  // 	}

  // 	console.log(email);
  // 	console.log(password);

  // 	// fetch a la api /login
  // }

  return (
    <>
      <h1>Login</h1>
      <div>
        <CInput
          type="email"
          name="email"
          placeholder="Email"
          emitFunction={handleChange}
          label="Email:"
        />
      </div>
      <div>
        <CInput
          type="password"
          name="password"
          placeholder="Password"
          emitFunction={handleChange}
        />
      </div>
      <div>
        <CInput type="button" value="Login" emitOnClickButton={login} />
      </div>

      {/* <h1> Login </h1>
			<div>
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					name="email"
					placeholder="Email"
					onChange={handleChange}
				/>
			</div>
			<div>
        <label htmlFor="password">Password:</label>
				<input
					type="password"
					name="password"
					placeholder="Password"
					onChange={handleChange}
				/>
			</div>
			<input type="button" value="Login" onClick={login} /> */}
    </>
  );
};
