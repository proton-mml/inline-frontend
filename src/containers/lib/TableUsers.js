import React from 'react';

import { Table } from 'react-bootstrap';
const header = props => {
	return (<thead>
    <tr>
      <th>#</th>
			<th>Email Empresa</th>
			<th>Cidade</th>
			<th>Estado</th>
      <th>Numero</th>
    </tr>
  </thead>);

};
const rows = props => {
	const { data } = props;
	return data.map(d => {
		console.log(d);
		return (
			<tr>
				<td>1</td>
				<td>{d.email_empresa}</td>
				<td>{d.cidade}</td>
				<td>{d.estado}</td>
				<td>{d.numero}</td>
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
