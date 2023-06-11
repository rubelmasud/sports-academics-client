import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
});
//  TODO   error of user log out and navigate to login page
const useAxiosSecure = () => {
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    navigate('');
                }
                return Promise.reject(error);
            }
        );
    }, [navigate]);

    return [axiosSecure];
};

export default useAxiosSecure;