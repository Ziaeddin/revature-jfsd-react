import axios from 'axios';

let navigationCallback = null;

export const setNavigationCallback = (callback) => {
    navigationCallback = callback;
};

//backend API
const apiService = axios.create({
    baseURL: 'http://localhost:9191/api',
    headers: {
        'Content-Type': 'application/json'
    }
});


apiService.interceptors.request.use(
    (config) => {
        
        const publicEndpoints = ['/auth/login', '/auth/register'];
        const isPublicEndpoint = publicEndpoints.some(endpoint => 
            config.url.includes(endpoint)
        );
        
        if (!isPublicEndpoint) {
            const token = localStorage.getItem('token');
            
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

apiService.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const publicEndpoints = ['/auth/login', '/auth/register'];
        const isPublicEndpoint = publicEndpoints.some(endpoint => 
            error.config?.url?.includes(endpoint)
        );
        
        // Handle 401 
        if (error.response && error.response.status === 401 && !isPublicEndpoint) {
            localStorage.removeItem('token');
            
            if (navigationCallback) {
                navigationCallback('/login');
            } else {
                window.location.href = '/login';
            }
        }
        
        return Promise.reject(error);
    }
);

export default apiService;
