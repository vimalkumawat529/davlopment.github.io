import React from 'react';
import Card from './Card';
import Sdata from './Sdata';


const Services = () => {
    return (
        <>
            <section className='Service-sec my-5'>
                <div className='heading text-center my-5'>
                    <h1>Our Services</h1>
                    <hr className='w-25 mx-auto' />
                </div>
                <div className="container">
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row gy-4'>
                                {Sdata.map((val, ind) => {
                                    return (
                                        <Card 
                                            key={ind}
                                            imgsrc={val.imgsrc}
                                            title={val.title}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    );
}
export default Services;