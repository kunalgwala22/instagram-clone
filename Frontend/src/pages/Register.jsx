import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
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
            const response = await axios.post('http://localhost:5500/api/v1/user/register', formData,{
                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials:true
            });
            console.log('Registration Success:', response.data);
            if(response.data.success){
                navigate('/login')
                message.success(response.data.message)
            }
            
        } catch (error) {
            console.error('Registration Error:', error);
            message.error(error.response.data.message);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card" style={{ width: '400px' }}>
                <div className="card-body">
                    <h2 className="card-title text-center">Registration Form</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Username:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </div>
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
                        <button type="submit" className="btn btn-primary w-100">Register</button>
                    </form>
                    <div className="mt-3 text-center">
                        <button className="btn btn-link" onClick={() => navigate('/login')}>
                            Already have an account? Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
