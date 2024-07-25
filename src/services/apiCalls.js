const URL = 'http://localhost:4000'

export const registerUser = async (credentials) => {
	const request = await fetch(`${URL}/register`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(credentials),
	});

	const result = await request.json();

  return result;
};

export const loginUser = async (credentials) => {
	const request = await fetch(`${URL}/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(credentials),
	});

	const result = await request.json();

  return result;
}

export const getProfile = async (token) => {
	const response = await fetch(`${URL}/profile`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	})

	return await response.json()
}

export const updateProfile = async (data, token) => {
	const response = await fetch(`${URL}/profile`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`
		},
		body: JSON.stringify(data)})
		
	return await response.json()
}

export const getAllUsers = async (token) => {
	const response = await fetch(`${URL}/users`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	})

	return await response.json()
}

export const deleteUserById = async (token, id) => {
	const response = await fetch(`${URL}/users/${+id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	})
	return await response.json()
}