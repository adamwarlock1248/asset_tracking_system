import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar({ login, logout }) {
    return (
        <>
            {
                login ? <nav className="navbar bg-dark container">
                    <h4><Link className="link" to="/">Index</Link></h4>
                    <h4><Link className="link" to="/home">Home</Link></h4>
                    <h4><Link className="link" to="/soft_inst">Software Installed</Link></h4>
                    <h4><Link className="link" to="/storage_info">Storage_Information</Link></h4>
                    <h4><Link className="link" to="/mem_details">Memory_Details</Link></h4>
                </nav>
                    :
                    <nav className="navbar bg-dark container">
                        <h4><Link className="link" to="/">Index</Link></h4>
                        <h4><Link className="link" to="/home">Home</Link></h4>
                        <h4><Link className="link" to="/soft_inst">Software Installed</Link></h4>
                        <h4><Link className="link" to="/storage_info">Storage_Information</Link></h4>
                        <h4><Link className="link" to="/mem_details">Memory_Details</Link></h4>
                        <button onClick={() => logout()}>LogOut</button>
                    </nav>
            }

        </>
    )
}

export default Navbar;