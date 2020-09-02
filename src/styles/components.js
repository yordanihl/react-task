import styled from 'styled-components';
import { textField } from 'styles/partial';

export const Button = styled.button`
	border-radius: 0;
	border: none;
	cursor: pointer;
	background-color: #ccc;
	height: 20px;
	line-height: 20px;

	&:hover {
		background-color: #aaa;
	}
`;

export const Select = styled.select`
	${textField}
`;

export const TextInput = styled.input`
	${textField}
	padding: 0 4px;
`;
