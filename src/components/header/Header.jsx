import './header.css'
import img from './assets/006aae5a2c2e7fc4e7ad35df3066eef201bbe4d5-1746872039.jpg'
import { useState, useEffect } from 'react';

const Header = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => setPost(json))
  }, []);

  return (
    <div className='header'>
      <div className="left">
        <img src={img} alt="Header" />
      </div>
      <div className="right">
        {post && (
          <div key={post.id}>
            <div className="div">
              <p>{post.body}</p>
            </div><br />
            <div className="div-2">
              <p>{post.title}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
