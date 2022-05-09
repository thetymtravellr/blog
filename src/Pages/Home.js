import React from 'react';
import Blogs from '../Components/Blogs';
import Header from '../Components/Header';

const Home = () => {
    return (
        <>
        <Header></Header>
        <main className='max-w-5xl mx-auto'>
           <Blogs></Blogs>
        </main>
        </>
    );
};

export default Home;