import React from 'react'
import Navbar from '../Navbar/Navbar'
import classes from './Header.module.css'

export default function Header(props) {
    return (
        <header>
            <div className={classes.header}>
                <h1>E-Commerce Title</h1>
                <Navbar />
            </div>
        </header>
    )
}