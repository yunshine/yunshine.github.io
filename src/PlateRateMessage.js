import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sorry from './media/Sorry.jpg';
import styles from './styles/MessageStyles.css';


export default function PlateRateMessage() {
    return (
        <div>
            <Navbar />

            <div class="container message-div">
                <img src={Sorry} alt="A sticky-note with 'sorry' written on it." class="img-fluid rounded mx-auto d-block message-div-img" />
                <p class="mt-5"><span className="sorry-span">Sorry! </span>Unfortunately, PlateRate's GitHub repository is private, so the code is not available to the public.</p>
            </div>

            <div className="message-footer">
                <Footer />
            </div>
        </div>
    )
}
