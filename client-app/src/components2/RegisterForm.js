import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
//import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import { Redirect } from 'react-router-dom';
import FooterComponent from './FooterComponent';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const RegisterForm = () => {
    const state = {
        redirect: false,
    }

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeColor = (event) => {
        return event.target.selected;
    }

    const handlePost = (event) => {
        event.preventDefault();
        fetch('http://localhost:5000/api/register',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                UserName: event.target.UserName.value,
                Email: event.target.Email.value,
                Password: event.target.Password.value,
                UserRoleId: 1
            })
        })
        .then(res=>res.json()).then((result)=>{
            // alert(result);
            // console.log(result);
            this.setState({...this.state, redirect: true})

        },
        (error)=>{
            alert('Failed')
        });
    }
    
    // if (this.state.redirect) {
    //     return <Redirect to='/'/>;
        
    // }

    return (
        <>
            <div className="form">
                <div className="text-center">
                    <h1>REGISTER</h1>
                </div>
                
                <form>
                    <input type="text" className="input" placeholder="Username" required />

                    <input type="email" className="input" placeholder="Email" required />

                    <input type="password" className="input" placeholder="Password" required />

                    <Link to="/login" className="forgot">Got an account?</Link>

                    <div className="d-grid gap-2 d-md-block">
                        <Button variant="success" block type="submit">
                            Sign up
                        </Button>
                    </div>

                    
                </form>
            </div>

            <FooterComponent pos="absolute" />
        </>
    )
}

export default RegisterForm;