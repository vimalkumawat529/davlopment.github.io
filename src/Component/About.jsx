import React from 'react';
import Common from './Common';
import software from '../images/software.png';


const About = () => {
    return (
        <>
            <Common
                name='Welcome To About Page'
                imgsrc={software}
                visit="/Contact"
                bname="Contact Now"
            />
        </>
    );
}
export default About;