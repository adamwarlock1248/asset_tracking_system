import React from 'react'
import "./Navbar.css";

const Wel = ({ verifyUser, isLoggedIn }) => {
    

    
    return (
        
        <>
            <div className="home-page">
                <div className="home-div">
                    <p className="pt-5"><h1>Welcome To</h1></p>
                    <h1>Asset Tracking System</h1>
                    <p className="pt-5">IT Asset Management (ITAM) is all about monitoring and managing the assets available in your network.
                        These assets play a huge role in the productivity of any organization.<br /> It is necessary to manage these assets with an ITAM solution to avoid
                        risks and unwanted expenditure and improve efficiency and productivity. <br />
                        Softwares installed will be displayed on the screen by which admin can delete unwanted softwares installed in the assets.</p>
                </div>
            </div>
            {isLoggedIn && <><input type="text" id="username" placeholder='UserName' />
            <input type="password" id="password" placeholder='Password' />
            <input type="button" value="Submit" onClick={() => verifyUser() } /></>}
        </>
    )
}

export default Wel;