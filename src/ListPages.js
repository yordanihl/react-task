import React from 'react';

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
				<div
					className={'page-btn' + (props.currentPage === i ? ' active' : '')}
					key={i}
					onClick={() => props.changePage(i)}
				>
					{i}
				</div>
			);
	}

	return <div className='list-pages'>{elemPages}</div>;
}
