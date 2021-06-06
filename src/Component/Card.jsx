import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    return (
        <>
            <div className='col-md-6 col-lg-4 col-10 mx-auto'>
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top img-fluid" alt="app" />
                    <div className="card-body">
                        <h2 className="card-title font-weight-bold">{props.title}</h2>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="#" className="click-btn">Go somewhere</NavLink>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Card;