import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log('Login attempt:', { email, password });
        setIsLoading(false);
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h2>Welcome Back</h2>
                    <p>Please sign in to your account</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            id="email"
                            className="form-input"
                            placeholder=" "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label className="form-label" htmlFor="email">Email Address</label>
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            id="password"
                            className="form-input"
                            placeholder=" "
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label className="form-label" htmlFor="password">Password</label>
                    </div>

                    <div className="form-options">
                        <label className="remember-me">
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </label>
                        <a href="#" className="forgot-password">Forgot password?</a>
                    </div>

                    <button type="submit" className="login-button" disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <div className="spinner"></div>
                                Signing In...
                            </>
                        ) : (
                            'Sign In'
                        )}
                    </button>
                </form>

                <div className="signup-link">
                    Don't have an account?
                    <a href="#" onClick={(e) => { e.preventDefault(); onSwitch(); }}>Sign up</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
