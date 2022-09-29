import React, {useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Login.styles.css";

function Login(){

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function loginUser(event){
        event.preventDefault();

        const response = await fetch('http://localhost:4000/api/login', {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        const data = await response.json();

        console.log(data);

        if(data.status){
            localStorage.setItem("SaveToken", 'Bearer ' + data.saveToken);
            navigate('/');
        }

        setEmail("");
        setPassword("");
    };

    return(
        <>
        <div className="container">
            <h1>Instagram</h1>
            <form onSubmit={loginUser}>
                <input 
                    value={email}
                    onChange={ e => setEmail(e.target.value) }
                    type="text" 
                    placeholder="Email" 
                    />  
                <input 
                    value={password}
                    onChange={ e => setPassword(e.target.value) }
                    type="password" 
                    placeholder="Password" 
                    />
                <input type="submit" value="Log in" className="btn"/>
            </form>
        </div><br />
        <div className="redirectBox">
            <p className="simplePara">Don't have an account? <Link to="/register">Sign up</Link></p>
        </div>

        </>
    )
};

export default Login;