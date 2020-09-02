import React from 'react';
import { createGlobalStyle } from 'styled-components';
import ListContainer from 'components/ListContainer';

const GlobalStyle = createGlobalStyle`
html {
	box-sizing: border-box;
	font-family: sans-serif;
}
*,
*:before,
*:after {
	box-sizing: inherit;
}
body {
	margin: 0;
}
`;

export default function App() {
	return (
		<>
			<GlobalStyle />
			<ListContainer />
		</>
	);
}
