import { useState, useEffect } from 'react';
import './about.css'

const About = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(json => setPost(json))
    }, []);
    return (
        <div>
            <div className="max-width">
                <div className="about">
                    <div className="about-left">
                        <h2>{post.body}</h2>
                    </div>
                    <div className="about-right">
                        <h2>{post.body}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About 
