import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const Header = (props) => {
	const { isLoggedIn, handleLogoutClickAction  } = props;
	return (
    <div className='header'>
    <Navbar>
  		<Navbar.Header>
  			<Navbar.Brand>
  				<a href="#home">Inline Dashboard</a>
  			</Navbar.Brand>
  		</Navbar.Header>
  		<Nav>
  			<NavItem eventKey={1} href="#">
  				Empresas
  			</NavItem>
  			<NavItem eventKey={2} href="#">
  				Adicionar fila
  			</NavItem>
  			<NavItem eventKey={3} href="#">
  				Status fila
  			</NavItem>
  			<NavDropdown eventKey={4} title="Configurações" id="basic-nav-dropdown">
  				<MenuItem eventKey={4.1}>Perfil</MenuItem>
  				<MenuItem eventKey={4.2}>Adicionar Fila</MenuItem>
  				<MenuItem eventKey={4.3}>Configurar</MenuItem>
  				<MenuItem divider />
  				<MenuItem eventKey={4.4}>Sair</MenuItem>
  			</NavDropdown>
  		</Nav>
		</Navbar>
    </div>
	);
};

export { Header };
