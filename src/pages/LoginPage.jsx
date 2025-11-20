import { useState } from 'react'
import {Card, Button, Form} from "react-bootstrap"

const LoginPage = () => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        if (email == "admin@gmail.com" && password == '12345') {
            alert('Login Berhasil!')
        }else{
            alert("Mohon periksa email dan password anda!")
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
