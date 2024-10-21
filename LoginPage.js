import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        const response = await fetch('http://localhost/login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }), // Send email and password as JSON
        });

        const data = await response.json();
        if (data.success) {
            console.log('Login successful:', data);
            // Optionally redirect to the Account page
            window.location.href = '/account'; // Redirect to account page
        } else {
            console.error('Login failed:', data.message);
        }
    };

    return (
        <div className="container">
            <img src={process.env.PUBLIC_URL + '/login.png'} alt="background" className="background-image" />
            <div className="login-box">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            placeholder="Enter email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
