import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Category from '../CategoryList/Category';

const CategoryList = ( ) => {

    const [categories, setCategories] = useState([]);

    const fetchData = () => {
        axios.get('https://api.escuelajs.co/api/v1/categories')
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.error('Error fetching categories:', error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container">
            <h1 className="text-center">Category List</h1>
            <div className="row">
                {categories.map((category) => (
                    <Category key={category.id} data={category} />
                ))}
            </div>
        </div>
    );
};

export default CategoryList;