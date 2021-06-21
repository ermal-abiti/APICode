import React, {useState} from 'react'
import { Redirect } from 'react-router';

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
        <form onSubmit={submit}>
            <input type="text" className="form-control" placeholder="Username" required 
            onChange={e=>setUsername(e.target.value)}
            />

            <input type="password" className="form-control" placeholder="Password" required 
            onChange={e=>setPassword(e.target.value)}
            />

            <button type="submit" className="btn btn-success">Login</button>
        </form>
    )
}

export default LoginForm
