import React from 'react';

import { Table } from 'react-bootstrap';
const header = props => {
	return (<thead>
    <tr>
      <th>#</th>
			<th>Nome</th>
			<th>CNPJ</th>
			<th>Email</th>
			<th>Cidade</th>
			<th>Estado</th>
      <th>Numero</th>
      <th>Rua</th>
    </tr>
  </thead>);

};
const rows = props => {
	const { data } = props;
	var count = 0;
	return data.map(d => {
		count++;
		return (
			<tr>
				<td>{count}</td>
				<td>{d.nome}</td>
				<td>{d.cnpj}</td>
				<td>{d.email_empresa}</td>
				<td>{d.cidade}</td>
				<td>{d.estado}</td>
				<td>{d.numero}</td>
				<td>{d.logradouro}</td>
			</tr>
		);
	});
};

const TableUsers = props => {

	return (
		<Table responsive>
		{header(props)}
  		<tbody>
				{rows(props)}
  		</tbody>
			</Table>

	);
};

export { TableUsers };
