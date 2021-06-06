import React from 'react';
import Common from './Common';
import web from '../images/home-img.png';

const Home = () => {
    return (
        <>
            <Common
                name='Grow Your Business With'
                imgsrc={web}
                visit="/services"
                bname="Get Standard"
            />
        </>
    );
}
export default Home;