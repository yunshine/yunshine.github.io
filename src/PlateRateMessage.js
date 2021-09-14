import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sorry from './media/Sorry.jpg';

export default function PlateRateMessage() {
    return (
        <div>
            <Navbar />
            <h1>testing... platerate...</h1>
            <img src={Sorry} alt="A sticky-note with 'sorry' written on it." />
            <Footer />
        </div>
    )
}
