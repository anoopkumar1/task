import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/auth' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return req;
});

export const signup = (formData) => API.post('/signup', formData);
export const login = (formData) => API.post('/login', formData);
