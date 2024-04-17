import styled from 'styled-components';

const Alignments = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
`;

const Blind = styled.span`
	height: 1px;
	margin: -1px;
	overflow: hidden;
	width: 1px;
`;

const Alignment = styled.a`
	color: #000;
	text-decoration: none;
	font-size: 16px;
	font-style: normal;
	font-weight: ${props => (props.isActive ? '700' : '500')};
	line-height: 24px;
	letter-spacing: 0.15px;
	cursor: pointer;
	&:visited {
		color: #000;
	}
	&:hover {
		color: #000;
		text-decoration: underline;
	}
`;

const Filter = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;

	position: relative;
`;

const FilterButton = styled.button`
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5px;
`;

const FilterContent = styled.div`
	// margin: 10px;
	// justify-content: center;
	width: 500px;
	background: #fff;
	border-radius: 20px;
	position: absolute;
	top: 15px;
	right: 0;
	box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 1);
	z-index: 5;

	transition:
		visibility 0.3s,
		opacity 0.3s;
`;

const RegionList = styled.ul`
	width: 100%;
	width: 100%;
	text-align: center;
	height: 400px;
	overflow-y: scroll;
`;

const UniversityList = styled.ul`
	width: 100%;
	text-align: center;
	height: 400px;
	overflow-y: scroll;
`;

const Item = styled.li`
	&:hover {
		color: #009dff;
	}
	&.selected {
		color: #009dff;
	}
	font-size: 16px;
	font-weight: 500;
	padding: 15px 0;
	cursor: pointer;
	// border-bottom: 1px solid #ddd;
	border-right: 1px solid #ddd;

	&:last-child {
		border-bottom: 0;
	}
`;

const FilterList = styled.div`
	width: 100%;
	text-align: center;
	display: flex;
`;
const Buttons = styled.div`
	display: flex;
	justify-content: center;
	gap: 20%;
	padding: 15px 0;
	border-top: 1px solid #eee;

	&.btn2 {
		border: 1px solid #009dff;
		background: #009dff;
		border-radius: 20px;
		width: 20%;
		padding: 10px 0;
		font-size: 16px;
		color: #fff;
	}
`;

const FilterInButton = styled.button`
	border: 1px solid #009dff;
	border-radius: 20px;
	width: 20%;
	padding: 8px 0;
	font-size: 16px;
	color: #009dff;
	font-weight: 500;
`;

export {
	Alignments,
	Blind,
	Alignment,
	Filter,
	FilterButton,
	FilterContent,
	RegionList,
	UniversityList,
	Item,
	FilterList,
	Buttons,
	FilterInButton,
};
