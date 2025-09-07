import React, { useState } from 'react';
import './header.css';
import { IoMenu } from 'react-icons/io5';

const Header = ({ data }) => {
  const item = data.find(el => el.id === 1);
  const [open, setOpen] = useState(false); 

  return (
    <header className="header">
      <div className="background-header">
        <div className="div-header">
          {item && (
            <>
              <h2>{item.title}</h2>
              {Array.isArray(item.body) ? (
                <ul>
                  {item.body.map((el, i) => (
                    <li key={i}>{el}</li>
                  ))}
                </ul>
              ) : (
                <div className='header-p'>
                  <p>{item.body}</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <div className="div-menu">
        <IoMenu
          className="menu-icon"
          onClick={() => setOpen(!open)}
        />

        {open && item && (
          <>
            {Array.isArray(item.body) ? (
              <ul className="mobile-menu">
                {item.body.map((el, i) => (
                  <li key={i}>{el}</li>
                ))}
              </ul>
            ) : (
              <p className="mobile-text">{item.body}</p>
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
