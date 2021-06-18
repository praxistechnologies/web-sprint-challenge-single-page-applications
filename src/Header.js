import React from "react"
import "./header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <div className="header-section">
                <div className="logo-section">
                    <h1>LAMBDA EATS</h1>
                </div>
                <div className="btn-group-section">
                    <Link to="/" className="home-btn">Home</Link>
                    <Link className="help-btn">Help</Link>
                </div>
            </div>
        </>
    )
}

export default Header