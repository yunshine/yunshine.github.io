import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sorry from './media/Sorry.jpg';
import styles from './styles/MessageStyles.css';


export default function OneBiteMessage() {
    return (
        <div>
            <Navbar />

            <div class="container message-div">
                <img src={Sorry} alt="A sticky-note with 'sorry' written on it." class="img-fluid rounded mx-auto d-block message-div-img" />
                <p class="mt-5"><span className="sorry-span">Sorry! </span>Unfortunately, OneBite is down. Its domain has not been renewed by its owner.</p>
            </div>

            <div className="message-footer">
                <Footer />
            </div>
        </div>
    )
}
