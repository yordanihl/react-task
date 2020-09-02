import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
from {
	transform: rotate(0deg);
}
to {
	transform: rotate(360deg);
}`;
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
const Spinner = styled.div`
	border: 3px solid transparent;
	border-top-color: #aaa;
	border-bottom-color: #aaa;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	animation: ${spin} 2s linear infinite;
`;

export default function ListSpinner() {
	return (
		<Container>
			<Spinner />
		</Container>
	);
}
