import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import "./Landing.styles.css";


function Home(){
    return(
        <div>
            <h1>Instagram</h1>
            <p>Landing Page</p>
        </div>
    )
};
    
function Landing(){
    // const navigate = useNavigate();
    // const [access, setAccess] = useState(false);

    // useEffect(()=>{
    //     if(!access) navigate('/login')
    // }, [access, navigate]);

    // if(access) return <Home/>;
    
    return <Home/>
}

export default Landing;