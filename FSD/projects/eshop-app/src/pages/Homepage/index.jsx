import React from 'react';
import CategoryList from '../../components/CategoryList';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';   

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <CategoryList />
        </div>
    );
};

export default Homepage;
