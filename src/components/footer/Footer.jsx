import React from 'react'
import './footer.css'

const Footer = ({ data }) => {
    return (
        <div>
            <div className="footer-grid">
                {data.map((footer) => (
                    <div className="footer-card" key={footer.id}>
                        <div className="footer-icon">
                            <h1 className='icon'>{footer.icon}</h1>
                        </div>
                        <h3>{footer.title}</h3>
                        <p>{footer.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Footer
