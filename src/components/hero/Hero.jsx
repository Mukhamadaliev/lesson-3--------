import './hero.css'
import { useState, useEffect } from 'react';

const Hero = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(json => setPost(json))
    }, []);
    return (

        <div>
            <div className="max-width">

                <div className="div-hero">
                    <div className="hero-left">
                        <div key={post.id}>
                            <div className="div">
                                <p>{post.title}</p>
                            </div><br />
                            <div className="div-2">
                                <p>{post.title}</p>
                            </div><br />
                            <div className="div-2">
                                <p>{post.title}</p>
                            </div>
                        </div>
                    </div>
                    <div className="hero-right">
                        <div key={post.id}>
                            <div className="div">
                                <p>{post.body}</p>
                                <br />
                                <hr />
                                <br />
                                <p>{post.body}</p>
                                <br />
                                <hr />
                                <br />
                                <p>{post.body}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
