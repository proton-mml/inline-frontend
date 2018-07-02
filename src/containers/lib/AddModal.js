import React from 'react';

import { Form, FormGroup, Col, Button, FormControl } from 'react-bootstrap';


const AddModal = props => {
	let { title, id, handleChange, estado, cidade, logradouro, numero, complemento, email_empresa, senha, cnpj, nome, handleSubmit } = props;

	id = id || 'add_company';

	return (
    <div id={id} className='modal'>
        <div className='modal-content'>
          <h4 className='title'>{title}</h4>
  				<div className='content'>
  				  <Form horizontal className="add">
						<FormGroup controlId="nome" className={`group-nome`}>
              <div className={`form label nome`}>
                Nome
              </div>
              <FormControl type="nome" value={nome} onChange={(e) => handleChange(e)}/>
            </FormGroup>
            <FormGroup controlId="estado" className={`group-estado`}>
              <div className={`form label estado`}>
                Estado
              </div>
              <FormControl maxLength={2} type="estado" value={estado} onChange={(e) => handleChange(e)}/>
            </FormGroup>
            <FormGroup controlId="cidade" className={`group-cidade`}>
              <div className={`form label cidade`}>
                Cidade
              </div>
              <FormControl type="cidade" value={cidade} onChange={(e) => handleChange(e)}/>
            </FormGroup>
            <FormGroup controlId="logradouro" className={`group-logradouro`}>
              <div className={`form label logradouro`}>
                Rua
              </div>
              <FormControl type="logradouro" value={logradouro} onChange={(e) => handleChange(e)}/>
            </FormGroup>
            <FormGroup controlId="numero" className={`group-numero`}>
              <div className={`form label numero`}>
                Numero
              </div>
              <FormControl type="numero" value={numero} onChange={(e) => handleChange(e)}/>
            </FormGroup>
              <FormGroup controlId="complemento" className={`group-complemento`}>
                <div className={`form label complemento`}>
                  Complemento
                </div>
                <FormControl type="complemento" value={complemento} onChange={(e) => handleChange(e)}/>
              </FormGroup>
              <FormGroup controlId="email_empresa" className={`group-email_empresa`}>
                <div className={`form label email_empresa`}>
                  Email
                </div>
                <FormControl type="email_empresa" value={email_empresa} onChange={(e) => handleChange(e)}/>
              </FormGroup>
							<FormGroup controlId="senha" className={`group-senha`}>
	              <div className={`form label senha`}>
	                Senha
	              </div>
	              <FormControl type="password" value={senha} onChange={(e) => handleChange(e)}/>
	            </FormGroup>
  					</Form>
            <FormGroup className={`group-add`}>
              <Button onClick={(e) => handleSubmit(e)}>Adicionar</Button>
            </FormGroup>
            <FormGroup className={`group-cancel`}>
              <Button onClick={() => $('#add_company').modal('close')}>Cancelar</Button>
            </FormGroup>
  	      </div>
        </div>
      </div>
	);
};

export { AddModal };
