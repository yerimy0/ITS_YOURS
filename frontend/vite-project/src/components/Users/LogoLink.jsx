import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './UsersStyles';

const LogoLink = ({ src, alt = '로고' }) => {
	return (
		<Link to="/">
			<Logo src={src} alt={alt} />
		</Link>
	);
};

export default LogoLink;
