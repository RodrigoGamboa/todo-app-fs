const API_HOST_DOMAIN = "http://localhost";
const API_HOST_PORT = "8080";
const API_HOST = `${API_HOST_DOMAIN}:${API_HOST_PORT}`;

const API = {
  todos: () => `${API_HOST}/todos`,
  add: `${API_HOST}/add`,
};

export default API;
