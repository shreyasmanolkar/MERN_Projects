import React, {useState} from "react";
import "./Login.styles.css";

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function loginUser(event){
        event.preventDefault();

        const response = await fetch('http://localhost:5000/api/login', {
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
            <p className="simplePara">Don't have an account? <a href="">Sign up</a></p>
        </div>

        </>
    )
};

export default Login;