import React from 'react';

function ToggleContentButton({ onClick, title }) {
	return (
		<div onClick={onClick} style={{ cursor: 'pointer', fontWeight: '500', fontSize: '20px' }}>
			{title}
		</div>
	);
}

export default ToggleContentButton;
