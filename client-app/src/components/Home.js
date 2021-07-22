import React, { useState } from 'react'
import { useEffect } from 'react'
import {Carousel} from 'react-bootstrap'
import FooterComponent from './FooterComponent'

const Home = () => {
        const [username, setUsername] = useState('')
        useEffect(()=>{
            (
                async() =>{
                    const response = await fetch('http://localhost:5000/api/loggeduser', {
                        method:"GET",
                        headers: {"Content-Type": "application/json"},
                        credentials: 'include'
                    })

                    const content = await response.json()
                    setUsername(content.userName)
                }
                
            )();
        })
        return (
            <div className="home">
                <div className="main">
                    <h1>It's never too late to invest in your future</h1>
                </div>

                <div className="container">

                    <div className="showcase">
                        
                    </div>.

                </div>


                <FooterComponent pos="relative" />
                

            </div>
        )
}
export default Home;