import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
	background-color: #ececec;
	padding: 10px;
	height: 40px;
	display: flex;
	align-items: center;
`;

const PageBtn = styled.div`
	cursor: pointer;
	padding: 0 5px;
	height: 20px;
	line-height: 20px;

	${(props) =>
		props.active &&
		css`
			font-weight: bold;
			pointer-events: none;
		`}
`;

export default function ListPages(props) {
	const elemPages = [];

	for (let i = 1; i <= props.pages; i++) {
		if (
			i === 1 ||
			i === props.currentPage - 10 ||
			(i >= props.currentPage - 2 && i <= props.currentPage + 2) ||
			i === props.currentPage + 10 ||
			i === props.pages
		)
			elemPages.push(
				<PageBtn
					active={props.currentPage === i}
					key={i}
					onClick={() => props.changePage(i)}
				>
					{i}
				</PageBtn>
			);
	}

	return <Container>{elemPages}</Container>;
}
