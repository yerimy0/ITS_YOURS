import React from 'react';
import styled from 'styled-components';

function PurchaseHistoryCard({ imgUrls, price, sellerId, name, buyDate }) {
	return (
		<>
			<PurchaseCardWrap>
				<ImageBox>
					<ForPurchaseListImage src={imgUrls} alt="" />
				</ImageBox>
				<PurchaseListTitle>
					{name}
					<PurchaseListPrice>
						<PurchaseListPriceNum>{Number(price).toLocaleString()}</PurchaseListPriceNum>
						<PurchaseListWon>원</PurchaseListWon>
					</PurchaseListPrice>
					<PurchaseListSeller>{sellerId}</PurchaseListSeller>
				</PurchaseListTitle>
			</PurchaseCardWrap>
		</>
	);
}
export default PurchaseHistoryCard;

const PurchaseCardWrap = styled.div`
	display: flex;
	margin-left: 50px;
	&:hover {
		cursor: pointer;
	}
`;

const ImageBox = styled.div`
	width: auto;
	border: 1px solid #ded8e1;
	padding: 10px;
	margin: 5px;
	display: inline-block;
`;

const ForPurchaseListImage = styled.img`
	display: flex;
	width: 100px;
	height: 150px;
	display: inline-block;
`;

const PurchaseListTitle = styled.div`
	color: var(--M3-black, #000);
	font-family: SUIT;
	font-size: 20px;
	font-style: normal;
	font-weight: 300;
	letter-spacing: 0.15px;
	margin-top: 40px;
	margin-left: 10px;
`;

const PurchaseListPrice = styled.div`
	display: flex;
`;

const PurchaseListPriceNum = styled.div`
	color: var(--M3-black, #000);
	font-family: SUIT;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	display: inline-block;
	margin: 0px;
`;

const PurchaseListWon = styled.div`
	color: var(--M3-black, #000);
	font-family: SUIT;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 24px;
	display: inline-block;
	margin: 0px;
	margin-top: 5px;
`;

const PurchaseListSeller = styled.div`
	color: var(--M3-black, #000);
	font-family: SUIT;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 24px;
	display: inline-block;
	margin: 0px;
	flex-direction: column-reverse;
`;
