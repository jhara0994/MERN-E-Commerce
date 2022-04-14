import React from 'react'
import css from './Footer.module.css'

export default function Footer(props) {
    return (
        <footer>
          <div className={css.footerInfo}>
            <a href="tel:+4045558899" className="contact-info">Phone</a>
            <a href="mailto: jharalson29@gmail.com?subject=Art E-Commerce" className="contact-info">Email</a>
            <a href="https://github.com/jhara0994" className="contact-info">Github</a>
          </div>
          © MY ART 2022                                
        </footer>
    )
}