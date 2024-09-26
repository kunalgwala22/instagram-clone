import React from 'react'
import { Form, Input } from 'antd'
import {Link} from 'react-router-dom'
import '../styles/RegisterStyles.css'
const Login = () => {

  const onfinishHandler =(values)=>{
    console.log(values);
  }
  return (
    <>
    <div className="form-container">
      <Form layout='verticle' onFinish={onfinishHandler} className='register-form'> 
        <h1 className='text-center'>Login Form</h1>
     
        <Form.Item label='Email' name='email'>
          <Input type='email' required/>
        </Form.Item>
        <Form.Item label='password' name='password'>
          <Input type='password' required/>
        </Form.Item>
        
        <Link to='/register' className='m-2'>Already user login here</Link>
        <button type='submit' className='btn btn-primary'>Login</button>
      </Form>
      

    </div>
    </>
  )
}

export default Login