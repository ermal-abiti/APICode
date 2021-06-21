import React, {useState} from 'react'
import { Redirect } from 'react-router';
import { Button } from "react-bootstrap";

const LoginForm = () => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[redirect, setRedirect] = useState(false);

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
    return (
        <>
        <div className="text-center">
            <h1>Log In To Estator</h1>
        </div>
        <form onSubmit={submit}>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Username" required 
                onChange={e=>setUsername(e.target.value)}
                />
            </div>

            <div className="form-group">
                <input type="password" className="form-control" placeholder="Password" required 
                onChange={e=>setPassword(e.target.value)}
                />
            </div>

            <div className="d-grid gap-2 d-md-block">
                <Button variant="success" block type="submit">
                    Log In
                </Button>
            </div>

            
        </form>
        </>

        
    )
}

export default LoginForm
