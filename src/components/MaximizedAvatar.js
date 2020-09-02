import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	position: fixed;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	${(props) => props.hidden && 'display: none;'}
`;

const Image = styled.img`
	max-width: 100%;
	max-height: 100%;
`;

export default function MaximizedAvatar(props) {
	return (
		<Container
			hidden={props.openedAvatar ? false : true}
			onClick={props.closeAvatar}
		>
			<Image src={props.openedAvatar} alt='' />
		</Container>
	);
}
