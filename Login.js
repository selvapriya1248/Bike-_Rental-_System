import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <>
      <FloatingLabel 
        controlId="floatingInput" 
        label="Email address"
        className="m-5"
      >
        <center><h1>Login Now</h1></center>
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password" className='m-5'>
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <Button className='bts bts-success m-5'>Login</Button>
    </>
  );
}

export default Login;