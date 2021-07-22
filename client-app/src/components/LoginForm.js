import React, {useState, useEffect} from 'react'
import { Redirect } from 'react-router';
import { Button } from "react-bootstrap";
import FooterComponent from './FooterComponent';
import { Link } from 'react-router-dom';

const LoginForm = ({isAuthenticated}) => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[redirect, setRedirect] = useState(false);
    const[isAuth, setIsAuth] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/api/login', {
            method: "POST",
            credentials: 'include',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username,
                password

            })
        })

        setRedirect(true);
    }



    

    if (redirect) {
        return <Redirect to="/"/>
    }
    // console.log(isAuth())
    return (
        isAuthenticated ?
        <div>s</div>
        :
        <>
            <div className="form">
                <div className="text-center">
                    <h1>LOG IN</h1>
                </div>
                
                <form onSubmit={submit}>
                    <input type="text" className="input" placeholder="Username" required 
                    onChange={e=>setUsername(e.target.value)}
                    />

                    <input type="password" className="input" placeholder="Password" required 
                    onChange={e=>setPassword(e.target.value)}
                    />

                    <Link to="/register" className="forgot">Forgot password?</Link>

                    <div className="d-grid gap-2 d-md-block">
                        <Button variant="success" block type="submit">
                            Log In
                        </Button>
                    </div>

                    
                </form>
            </div>

            <FooterComponent pos="absolute" />
        </>

        
    )
}

export default LoginForm

