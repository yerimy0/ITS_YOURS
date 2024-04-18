import styled from 'styled-components';

const ProductCardWrap = styled.div`
	/* display: flex; */
	/* width: 170px; */
	width: 16%;
	/* height: 360px; */
	/* flex-direction: column; */
	/* align-items: flex-start; */
	cursor: pointer;
	/* margin: 0 0 20px; */
	position: relative;
	margin-top: 60px;
	@media (max-width: 1000px) {
		width: 47%;
		margin-top: 30px;
	}
`;

const ProductImage = styled.img`
	/* display: flex; */
	height: 250px;
	width: 100%;
	/* margin: 0 auto;
	display: block; */
	object-fit: cover;
	/* height: 254px; */
	/* align-items: flex-start; */
	box-shadow: 0 2px 8px #777;

	&:hover {
		// transform: skewX(1deg);
	}
`;

const ProductInfoWrap = styled.div`
	width: 100%;
	/* display: flex; */
	/* align-items: flex-start; */
	/* margin-top: 15px; */
	/* justify-content: center; */
	display: block;
	margin: 0 auto;
	padding-top: 10px;
`;

const ProductInfo = styled.div`
	display: block;
`;

const ProductTitle = styled.p`
	width: 100%;
	height: 42px;
	margin: 0;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	display: block;
	margin-top: 6px;
	/* line-height: 24px; */
	letter-spacing: 0.15px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	@media (max-width: 1000px) {
		font-size: 14px;
		height: 36px;
	}
`;
const ProductPrice = styled.div`
	display: flex;
	align-items: center;
	margin-top: 10px;
`;
const Price = styled.p`
	font-size: 22px;
	/* line-height: 28px; */
	font-weight: 500;
	font-style: normal;
	margin: 0;
	@media (max-width: 1000px) {
		font-size: 16px;
	}
`;
const PriceWon = styled.p`
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	/* line-height: 28px; */
	margin: 0 0 0 3px;
	@media (max-width: 1000px) {
		font-size: 14px;
	}
`;
const ProductButton = styled.div`
	display: flex;
	width: 25px;
	/* flex-direction: column;
	justify-content: center;
	align-items: center; */
	/* gap: 5px; */
	position: absolute;
	bottom: 0;
	right: 0;
	@media (max-width: 1000px) {
		width: 20px;
	}
`;

export {
	ProductCardWrap,
	ProductImage,
	ProductInfoWrap,
	ProductInfo,
	ProductTitle,
	ProductPrice,
	Price,
	PriceWon,
	ProductButton,
};
