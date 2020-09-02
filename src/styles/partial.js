import { css } from 'styled-components';

export const ellipsisText = css`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const textField = css`
	border: none;
	box-shadow: inset 1px 1px 5px #999;
	border-radius: 0;
	height: 20px;
	line-height: 20px;
	background-color: #fff;
`;
