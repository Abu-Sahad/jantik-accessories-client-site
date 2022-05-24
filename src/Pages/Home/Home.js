import React from 'react';
import Footer from '../Footer/Footer';
import Iteams from '../Iteams/Iteams';
import Reviews from '../Reviews/Reviews';
import Summary from '../Summary/Summary';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Iteams></Iteams>
            <Summary></Summary>
            <Reviews></Reviews>
            <Footer></Footer>

        </div>
    );
};

export default Home;