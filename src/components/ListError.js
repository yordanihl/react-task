import React from 'react';
import styled from 'styled-components';
import { Button } from 'styles/components';

const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export default function ListError(props) {
	return (
		<Container>
			<h3>Something went wrong!</h3>
			<Button onClick={props.refresh}>Try again</Button>
		</Container>
	);
}
