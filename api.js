import axios from 'axios';

// Update URL to match your backend
const API_URL = 'http://localhost:2500/api/users';

// Function for user signup
export const signup = (user) => {
    return axios.post(`${API_URL}/signup`, user);
};

// Function for user login
export const login = (email, password) => {
    return axios.post(`${API_URL}/login`, null, {
        params: { email, password }
    });
};
