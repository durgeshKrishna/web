import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Form.css'; 

const Form = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const confirm = () => {
        if (!username || !email || !password) {
            alert('All fields are required!');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Invalid email format!');
            return;
        }

        alert('Form submitted successfully!');
        navigate('/HomePage');
    };

    return (
        <div className="form-container">
            <header className="form-header">
                <h1>Form Validation</h1>
            </header>
            <form className="form" onSubmit={confirm}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Gender:</label>
                    <div className="radio-group">
                        <label><input type="radio" name="gender" value="male" /> Male</label>
                        <label><input type="radio" name="gender" value="female" /> Female</label>
                    </div>
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
}

export default Form;
