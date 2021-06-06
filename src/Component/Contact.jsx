import React from 'react';
import {NavLink} from 'react-router-dom';

const Contact = () => {

    return (
        <>
            <section className=' contact-sec my-3'>
                <div className='heading text-center mb-3'>
                    <h1>Contact Us</h1>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-12 mx-auto'>
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control" name="fullname" placeholder='Enter Your Name' />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Phone Number</label>
                                    <input type="text" className="form-control" name="phone" placeholder="Enter Your Mobile Number" />
                                </div>
                                
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp " placeholder='name@example.com' />

                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Upload File</label>
                                    <input type="file" className="form-control" placeholder="Enter Your Mobile Number" />
                                </div>
                                
                                <div className="mb-3">
                                    <label className="form-label">Message</label>
                                    <textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <NavLink to='/'  className="click-btn">Submit</NavLink>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default Contact;