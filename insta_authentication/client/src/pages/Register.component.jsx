import React, {useState} from "react";
import "./Register.styles.css";

function Register(){

    const [email, setEmail] = useState('');
    const [fullName, setFullname] = useState('');
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function registerUser(event){
        event.preventDefault();

        const response = await fetch('http://localhost:5000/api/register', {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                fullName,
                userName,
                password
            })
        });
        const data = await response.json();
        console.log(data);
    
        setEmail("");
        setUsername("");
        setFullname("");
        setPassword("");
    };

    return(
        <>
        <div className="container">
            <h1>Instagram</h1>
            <p className="in">Sign up to see photos and videos from your friends.</p>
            <form onSubmit={registerUser}>
                <input 
                    value={email}
                    onChange={ e => setEmail(e.target.value) }
                    type="text" 
                    placeholder="Email" 
                    />  
                <input 
                    value={fullName}
                    onChange={ e => setFullname(e.target.value) }
                    type="text" 
                    placeholder="Full Name" 
                    />
                <input 
                    value={userName}
                    onChange={ e => setUsername(e.target.value)}
                    type="text" 
                    placeholder="Username" 
                    />
                <input 
                    value={password}
                    onChange={ e => setPassword(e.target.value) }
                    type="password" 
                    placeholder="Password" 
                    />
                <p>People who use our service may have uploaded your contact information to Instagram. <span>Learn <br /> More</span></p>
                <p>By signing up, you agree to our <span>Terms , Privacy Policy </span> and <span> Cookies Policy .</span> </p>
                <input type="submit" value="Sign in" className="btn"/>
            </form>
        </div>
        <br />
        <div className="redirectBox">
            <p className="simplePara">Have an account? <a href="">Log in</a></p>
        </div>
    </>
    )
};

export default Register;