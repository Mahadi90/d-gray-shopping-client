import React from 'react';
import Banner from './Banner/Banner';
import Collection from './Collection/Collection';
import Popular from './Popular/Popular';
import Category from './Category/Category';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Collection></Collection>
           <Popular></Popular>
           <Category></Category>
        </div>
    );
};

export default Home;