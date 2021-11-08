import React from 'react';
import './Service.css';

const Service = ({service}) => {
    // const {service} = props;
    console.log(service);
    const {name, price, description, img} = service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
        </div>
    );
};

export default Service;