import React from 'react';
import styled from 'styled-components';
import ListSingleEmployee from 'components/ListSingleEmployee';

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	background-color: #fafafa;
	height: calc(100% - 80px);
	overflow: auto;
`;

export default function ListPageBody(props) {
	const componentSingleEmployee = props.pageBody.map((employee) => (
		<ListSingleEmployee
			key={employee.uuid}
			employee={employee}
			openAvatar={props.openAvatar}
		/>
	));
	return <Container>{componentSingleEmployee}</Container>;
}
