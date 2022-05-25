import React from 'react';
import Footer from '../Footer/Footer';
import Iteams from '../Iteams/Iteams';
import Reviews from '../Reviews/Reviews';
import Subscribe from '../Subscribe/Subscribe';
import Summary from '../Summary/Summary';
import Support from '../Support/Support';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Iteams></Iteams>
            <Summary></Summary>
            <Reviews></Reviews>
            <Support></Support>
            <Subscribe></Subscribe>
            <Footer></Footer>

        </div>
    );
};

export default Home;