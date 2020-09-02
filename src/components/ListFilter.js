import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, TextInput } from 'styles/components';

const Form = styled.form`
	background-color: #ececec;
	padding: 10px;
	height: 40px;
	display: flex;
	align-items: center;
`;

export default function ListFilter(props) {
	const [value, setValue] = useState('');

	function handleChange(event) {
		setValue(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		props.filterEmployees(value);
	}

	return (
		<Form onSubmit={handleSubmit} className='list-filter'>
			<TextInput type='text' value={value} onChange={handleChange} />
			<Button>Filter</Button>
		</Form>
	);
}
