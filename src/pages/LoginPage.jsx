import axios from 'axios';
import { useState } from 'react'
import {Card, Button, Form} from "react-bootstrap"
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault();
        setError("");
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/login', {
            email,
            password,
          });

          if(response.status == 200){
            localStorage.setItem("token", response.data.token);
            navigate("/user")
          }
        } catch (error) {
          setError(error.response.data.message || "Login Failed")
          console.log(error.error);
        }
    } 
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 bg-light'>
      <Card style={{ width:"40rem", padding:"20px" }}>
        <h3 className='text-center mb-3'>Login Form</h3>
        <Form onSubmit={handleLogin}>
            <Form.Group className='mb-3'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='Masukkan Email' required onChange={function(e){setEmail(e.target.value)}}/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Masukkan Password' required onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <Button variant='primary' type='submit' className='w-100'>Login</Button>
        </Form>
      </Card>
    </div>
  )
}

export default LoginPage
