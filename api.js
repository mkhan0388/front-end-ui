

const axios = require("axios").create({
	baseURL: "https://bird-brain-nc-project.herokuapp.com"
	// baseURL: "http://localhost:8080"
});

export const login = (email, password) => {
	return axios.get("/login", {
		params: {
			email,
			password
		}
	});
};

export const signup = (email, password) => {
	return axios.post("/login", {
		email,
		password
	});
};

export const mainImage = (bird_name, image_num) => {
	return axios.get(`photo/${bird_name}/${image_num}`).then((res) => {

	})
}
