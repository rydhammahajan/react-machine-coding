import React, { useState } from 'react';
import './ContactForm.module.css'

function ContactForm() {
    const [name, setName] = useState(""); 
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState({}); 
    const [showSuccess , setShowSuccess] = useState(false) ;   

    const validateInput = () => {
        const temp = {}; 
        if (name.trim() == "") { temp.name= "Name is required" };
        if (email.trim() == "") {
            temp.email = "Email is required"
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            temp.email = "Invalid Email Format"
        }

        if (message.trim() == "") { temp.message = "Message is required" };

        if(Object.keys(temp).length > 0)
        {
            setError(temp);
        
        }else{
            setShowSuccess(true);
        }
    }
    return (
        <div className = "contact-container">
            {/* Implement contact form logic here */}
            {showSuccess ?( <h1>Thank you, {name}!</h1>):

                (<form className="form-container">
                    <div className="label">
                        <label for = "name">Name:</label>
                        <input id = "name"type="text"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        ></input>
                        {error.name ? (<span className="error-message">{error.name}</span>) : (<></>)}
                    </div>

                    <div className="label">
                        <label for = "email">Email:</label>
                        <input id = "email"type="email" required
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        ></input>
                        {error.email ? (<span className="error-message">{error.email}</span>) : (<></>)}
                    </div>

                    <div className="label">
                        <label for = "message">Message:</label>
                        <textarea id = "message" value={message}
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}></textarea>
                        {error.message ? (<span className="error-message">{error.message}</span>) : (<></>)}
                    </div>

                    <button className="button"
                        onClick={(e) => {
                            e.preventDefault();
                            validateInput();
                        }}
                    >Submit</button>

                </form>)

            }
        </div>
    );
}

export default ContactForm;