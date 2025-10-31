import apiService from './apiService';

class ProductService {
    
    async getAllProducts() {
        const response = await apiService.get('/products');
        return response.data;
    }

    async getProductById(id) {
        const response = await apiService.get(`/products/${id}`);
        return response.data;
    }

    async createProduct(productData) {
        const response = await apiService.post('/products', productData);
        return response.data;
    }

    async updateProduct(id, productData) {
        const response = await apiService.put(`/products/${id}`, productData);
        return response.data;
    }

    async deleteProduct(id) {
        const response = await apiService.delete(`/products/${id}`);
        return response.data;
    }
}

export default new ProductService();
