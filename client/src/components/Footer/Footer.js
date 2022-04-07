import React from 'react'

export default function Footer () {
        return (
            <footer id="footer">
                <div className="footer-contacts">
                    <a href="tel:+4042854719" className="contact-info">Phone</a>
                    <a href="mailto: jharalson29@gmail.com?subject=Project Ideas" className="contact-info">Email<i className="fa fa-envelope" aria-hidden="true"></i></a>
                    <a href="https://github.com/jhara0994" className="contact-info">Github<i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/jared-haralson-179b16123/" className="contact-info">LinkedIn<i className="fab fa-linkedin-in"></i></a>
                    <a href="https://stackoverflow.com/users/18613202/jhara0994" className="contact-info">StackOverflow</a>
                </div>
            </footer>
        )
}