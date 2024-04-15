import React from 'react';

function ToggleContentButton({ onClick, title }) {
	return (
		<div onClick={onClick} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
			{title}
		</div>
	);
}

export default ToggleContentButton;
