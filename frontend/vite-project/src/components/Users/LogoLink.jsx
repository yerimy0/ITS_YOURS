import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './UsersStyles';

function LogoLink({ src, alt = '로고' }) {
	return (
		<div className="link_wrap">
			<Link to="/" className="sign_logo">
				<Logo src={src} alt={alt} />
			</Link>
		</div>
	);
}

export default LogoLink;
