import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const NavBar =() => {
    const navigate = useNavigate();
    const navigateToLogin = () =>{
        navigate('/login')
    }
    return (
        <div>
            <button onClick={()=> navigateToLogin()} >Login</button>
        </div>
    )
}
export default NavBar;