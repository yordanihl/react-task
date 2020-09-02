import React, { useState } from 'react';
import styled from 'styled-components';
import { defaultAvatar, customization } from 'globalVariables';
import { ellipsisText } from 'styles/partial';
import { Select, TextInput } from 'styles/components';

const Container = styled.div`
	padding: 5px;
	margin: 10px;
	width: 200px;
	background-color: ${(props) =>
		props.background ? props.background : '#fff'};
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
	position: relative;
`;
const AvatarImg = styled.img`
	width: 50px;
	height: 50px;
	object-fit: cover;
`;
const Name = styled.h3`
	margin-top: 0px;
	margin-bottom: 10px;
	${ellipsisText}
`;
const Title = styled.div`
	margin-bottom: 10px;
	color: rgba(0, 0, 0, 0.5);
	font-size: 14px;
	font-weight: normal;

	div {
		${ellipsisText}
	}
`;
const Bio = styled.div`
	height: 200px;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.15);
	box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 0.25);
	padding: 5px;
	overflow-wrap: break-word;
`;
const SelectColor = styled(Select)`
	position: absolute;
	top: 25px;
	right: 5px;
	width: 125px;
`;
const Label = styled(TextInput)`
	position: absolute;
	top: 5px;
	right: 5px;
	width: 125px;
`;

export default function ListSingleEmployee(props) {
	const { index, avatar, name, title, company, bio } = props.employee;
	const [color, setColor] = useState(
		customization.colors[index] ? customization.colors[index] : ''
	);
	const [label, setLabel] = useState(
		customization.labels[index] ? customization.labels[index] : ''
	);

	function useDefaultAvatar(event) {
		event.target.src = defaultAvatar;
	}

	function openAvatar(event) {
		props.openAvatar(event.target.src);
	}

	function changeColor(event) {
		if (event.target.value) customization.colors[index] = event.target.value;
		else delete customization.colors[index];
		localStorage.setItem('customization', JSON.stringify(customization));
		setColor(event.target.value);
	}

	function changeLabel(event) {
		if (event.target.value) customization.labels[index] = event.target.value;
		else delete customization.labels[index];
		localStorage.setItem('customization', JSON.stringify(customization));
		setLabel(event.target.value);
	}

	return (
		<Container background={color}>
			<AvatarImg
				src={avatar}
				alt={'avatar of ' + name}
				onError={useDefaultAvatar}
				onClick={openAvatar}
			/>
			<Name title={name}>{name}</Name>
			<Title>
				<div title={title}>{title}</div>
				<div title={company}>{company}</div>
			</Title>
			<div>Bio:</div>
			<Bio>{bio}</Bio>
			<SelectColor defaultValue={color} onChange={changeColor}>
				<option value=''>default color</option>
				<option value='lightblue'>lightblue</option>
				<option value='darkseagreen'>darkseagreen</option>
				<option value='khaki'>khaki</option>
			</SelectColor>
			<Label
				type='text'
				value={label}
				onChange={changeLabel}
				placeholder='no label'
			/>
		</Container>
	);
}
