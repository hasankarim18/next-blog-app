import React from 'react';
import Banner from './HomePage/Banner';
import HomeBlog from './HomePage/HomeBlog';
import LatestPosts from './HomePage/LatestPosts';

const HomePage = () => {
    return (
        <div className="container mx-auto">
            <Banner />
            <HomeBlog />
            <LatestPosts />
        </div>
    );
};

export default HomePage;