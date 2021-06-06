import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return (
        <>
            <section className="container-fluid home-section my-5">
                <div className='row'>
                    <div className='col-10 mx-auto '>
                        <div className='row'>
                            <div className='col-lg-7 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                <h2>{props.name} <strong className='brand-name'><br />Davlopment</strong></h2>
                                <h4 className='my-2'>We Are The Team Of Telanted Davloper Making Websites</h4>
                                <div className='mt-2'><NavLink to={props.visit}>{props.bname}</NavLink></div>
                            </div>
                            <div className='col-lg-5 d-flex justify-content-end order-1 order-lg-2 mx-auto'>
                                <figure>
                                    <img src={props.imgsrc} alt="home-img" className='img-fluid' />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Common;