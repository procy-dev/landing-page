import React from 'react';
import { Button } from './Button';
import '../css/Hero.css';
import '../css/App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>CHRIS WINKLER</h1>
            <p>Software Engineer by Day</p>
            <p>Doggo Dad by Night</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    CHECK ME OUT
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    RESUMÉ <i class="fas fa-file-alt"></i>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
