import React from 'react';

export default function MaximizedAvatar(props) {
	return (
		<div
			className='maxed-avatar'
			style={!props.openedAvatar ? { display: 'none' } : {}}
			onClick={props.closeAvatar}
		>
			<img src={props.openedAvatar} alt='' className='maxed-avatar-container' />
		</div>
	);
}
