import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { message } from  'antd'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/v1/user/login', formData,{
                headers:{
                     'Content-Type': 'application/json'
                },
                withCredentials:true
            });
            console.log('Login Success:', response.data);
            if(response.data.success){
                message.success(response.data.message)
                navigate( '/');
            }
            
            // Handle successful login (e.g., redirect to a dashboard)
        } catch (error) {
            console.error('Login Error:', error);
            message.error(error.response.data.message)
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card" style={{ width: '400px' }}>
                <div className="card-body">
                    <h2 className="card-title text-center">Login Form</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                    <div className="mt-3 text-center">
                        <button className="btn btn-link" onClick={() => navigate('/register')}>
                            Don't have an account? Register
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;
