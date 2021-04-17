import React from 'react';


const Hero = ({handleLogout}) => {
    return (
        <section  className="hero">
            <nav>
                <h2>Digital Campus</h2>
                <button onClick={handleLogout}>LogOut</button>
            </nav>
        </section>
    );
};


export default Hero;
