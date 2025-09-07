import React from "react";
import './hero.css';


const Hero = ({ data }) => {
    const item = data.find(el => el.id === 2);

    return (
        <section className="hero">
            {item && (
                <>
                    <div className="div-hero-max">
                        <div className="hero-left">

                            <h1>{item.title}</h1>
                            <p>{item.body}</p>
                            {item.lorem && <p>{item.lorem}</p>}
                        </div>
                        <div className="hero right">

                            {item.img && <img src={item.img} alt={item.title} />}
                            
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};

export default Hero;
