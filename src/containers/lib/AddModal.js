import React from 'react';

import { Form, FormGroup, Col, Button, FormControl } from 'react-bootstrap';


const AddModal = props => {
	let { title, id, handleChange, estado, cidade, logradouro, numero, complemento, email_empresa, handleSubmit } = props;

	id = id || 'add_company';

	return (
    <div id={id} className='modal'>
        <div className='modal-content'>
          <h4 className='title'>{title}</h4>
  				<div className='content'>
  				  <Form horizontal className="add">
            <FormGroup controlId="estado">
              <div className={`form label estado`}>
                estado
              </div>
              <FormControl type="estado" placeholder="estado" value={estado} onChange={(e) => handleChange(e)}/>
            </FormGroup>
            <FormGroup controlId="cidade">
              <div className={`form label cidade`}>
                cidade
              </div>
              <FormControl type="cidade" placeholder="cidade" value={cidade} onChange={(e) => handleChange(e)}/>
            </FormGroup>
            <FormGroup controlId="logradouro">
              <div className={`form label logradouro`}>
                logradouro
              </div>
              <FormControl type="logradouro" placeholder="logradouro" value={logradouro} onChange={(e) => handleChange(e)}/>
            </FormGroup>
            <FormGroup controlId="numero">
              <div className={`form label numero`}>
                numero
              </div>
              <FormControl type="numero" placeholder="numero" value={numero} onChange={(e) => handleChange(e)}/>
            </FormGroup>
              <FormGroup controlId="complemento">
                <div className={`form label complemento`}>
                  Senha
                </div>
                <FormControl type="complemento" placeholder="complemento" value={complemento} onChange={(e) => handleChange(e)}/>
              </FormGroup>
              <FormGroup controlId="email_empresa">
                <div className={`form label email_empresa`}>
                  Senha
                </div>
                <FormControl type="email_empresa" placeholder="email_empresa" value={email_empresa} onChange={(e) => handleChange(e)}/>
              </FormGroup>
  					</Form>
            <FormGroup>
              <Button onClick={(e) => handleSubmit(e)}>Adicionar</Button>
            </FormGroup>
  	      </div>
        </div>
      </div>
	);
};

export { AddModal };
