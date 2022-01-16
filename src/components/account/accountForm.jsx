import * as React from "react";
import { Link } from "wouter";
import { Form, Row, Button } from "react-bootstrap";


class accountForm extends React.component {
  render() {
    const { isLogin, handler } = this.props;
    
    return (
      <Form className="account-form">
        <Form.Group as={Row} className="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="name@domain.com" />
        </Form.Group>
        
        <Form.Group as={Row} className="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password here..." />
        </Form.Group>
        
        <Button type="button" onClick={handler}>
          {isLogin ? "Log In" : "Register"}
        </Button>
      </Form>
    );
  }
}

export default accountForm;