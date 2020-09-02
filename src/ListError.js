import React from 'react';

export default function ListError(props) {
	return (
		<div className='spinner-container'>
			<h3>Something went wrong!</h3>
			<button onClick={props.refresh}>Try again</button>
		</div>
	);
}
