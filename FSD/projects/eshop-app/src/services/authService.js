import apiService from './apiService';
import store from '../redux/store';
import { login as loginAction, logout as logoutAction } from '../redux/actions/auth-action';

class AuthService {
    
    async login(usernameOrEmail, password) {
        try {
            const response = await apiService.post('/auth/login', {
                usernameOrEmail,
                password
            });
            
            console.log('Login response:', response.data);
            
            const token = typeof response.data === 'string' ? response.data : response.data.token;
            const username = response.data.username || response.data.user?.username || usernameOrEmail;
            
            console.log('Token:', token);
            console.log('Username:', username);
            
            if (token) {
                
                localStorage.setItem('token', token);
                localStorage.setItem('username', username);
                
                console.log('Saved to localStorage - token:', localStorage.getItem('token'));
                console.log('Saved to localStorage - username:', localStorage.getItem('username'));
                
                store.dispatch(loginAction(username, token));
            } else {
                console.error('No token received from backend!');
            }
            
            return { token, username };
        } catch (error) {
            console.error('Login error details:', error.response?.data || error.message);
            throw error;
        }
    }

    async register(userData) {
        try {
            const response = await apiService.post('/auth/register', userData);
            
            // Optionally auto-login after registration
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
            }
            
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    logout() {
        // Remove from localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        
        // Dispatch to Redux
        store.dispatch(logoutAction());
    }

    getToken() {
        return localStorage.getItem('token');
    }
    
    getUsername() {
        return localStorage.getItem('username');
    }

    isAuthenticated() {
        return !!this.getToken();
    }
}

export default new AuthService();
