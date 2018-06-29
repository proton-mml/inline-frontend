import React from 'react';

import { Form, FormGroup, Col, Button, FormControl } from 'react-bootstrap';

const LoginForm = props => {
	const {	email, password, handleChange, handleSubmit	} = props;

	return (
    <div className='login-form'>
      <Form horizontal>
        <FormGroup controlId="email">
          <div className={`form label email`}>
            Email
          </div>
          <FormControl type="email" placeholder="Email" value={email} onChange={(e) => handleChange(e) }/>
        </FormGroup>
        <FormGroup controlId="password">
          <div className={`form label password`}>
            Senha
          </div>
          <FormControl type="password" placeholder="Password" value={password} onChange={(e) => handleChange(e)}/>
        </FormGroup>
        <FormGroup>
          <Button onClick={(e) => handleSubmit(e)}>Sign in</Button>
        </FormGroup>
      </Form>
    </div>
	);
};

export { LoginForm };
