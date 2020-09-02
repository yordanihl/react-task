import React from 'react';
import ListSingleEmployee from './ListSingleEmployee';

export default function ListPageBody(props) {
	const componentSingleEmployee = props.pageBody.map((employee) => (
		<ListSingleEmployee
			key={employee.uuid}
			employee={employee}
			openAvatar={props.openAvatar}
		/>
	));
	return <div className='list-page'>{componentSingleEmployee}</div>;
}
