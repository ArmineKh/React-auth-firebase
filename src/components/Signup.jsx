import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link } from "react-router-dom";
 
const Signup = () => {

  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault()

    if(passwordRef.current.value !== passwordConfirmRef.current.value){
      return setError('Password do not match')
    }

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
    } catch (error) {
      setError('Failed to create an account')
    }

    setLoading(false)
  }

  return (
    <>
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Sign Up</h2>
        {error && <Alert variant='danger'>{ error }</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' ref={emailRef} required />
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' ref={passwordRef} required />
          </Form.Group>
          <Form.Group id="password-confirm">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control type='password' ref={passwordConfirmRef} required />
          </Form.Group>
          <Button disabled={loading} className='w-100 mt-3' type='submit'>Sign Up</Button>
        </Form>
      </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
      Already have an account? <Link to="/login"> Log In</Link>
    </div>
    </>
  )
}

export default Signup;