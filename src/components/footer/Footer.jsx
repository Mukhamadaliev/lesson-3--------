import { useState, useEffect } from 'react';
import './footer.css'

const Footer = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(json => setPost(json))
    }, []);
    return (
        <div>
            <div className="max-width">
                <div className="Footer">
                    <div className="Footer-left">
                        <h2>{post.title}</h2>
                    </div>
                    <div className="Footer-right">
                        <h2>{post.title}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
