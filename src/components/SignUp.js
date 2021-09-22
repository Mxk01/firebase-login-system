import React from 'react'
import { useRef } from 'react';
import { Form, Card, Button } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'

function SignUp() {

    let emailRef = useRef();
    let passwordRef = useRef();
    let passwordConfirmRef = useRef()


    // this is the value returned from useAuth function
    const { signup, currentUser } = useAuth();

    function handleSubmit(e) {
        e.preventDefault();
        // passing in email and password to signup function
        signup(emailRef.current.value, passwordRef.current.value);
    }
    return (
        <>

            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">SignUp</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" required ref={emailRef} />
                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" required ref={passwordRef} />

                        </Form.Group>

                        <Form.Group id="password-confirm" className="mb-2">
                            <Form.Label> Password confirmation </Form.Label>
                            <Form.Control type="password" required ref={passwordConfirmRef} />

                        </Form.Group>
                        {/* w-100 means take full width of page */}
                        <Button className="w-100" type="submit">Sign up</Button>
                    </Form>
                </Card.Body>
            </Card>

            {/* Creates a div with width 100,text centered ,
        margin-top 2 */}
            <div className="w-100 text-center mt-2" >
                Already have an account?
            </div>

        </>
    )
}

export default SignUp
