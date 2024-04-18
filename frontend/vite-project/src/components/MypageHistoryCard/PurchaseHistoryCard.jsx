import React from 'react';
import styled from 'styled-components';

function PurchaseHistoryCard({ imgUrls, price, name, sellerId }) {
	return (
		<>
			<PurchaseCardWrap className="purch_list">
				<ImageBox>
					<ForPurchaseListImage
						src={imgUrls.map(url => url.replace('coversum', 'cover500'))}
						alt=""
					/>
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
	align-items: center;
	gap: 10px;
	width: 100%;
	padding: 10px 15px;
	border-top: 1px solid #eee;

	&:hover {
		background: #f4f4f4;
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
	font-size: 20px;
	letter-spacing: 0.15px;
	margin-left: 10px;

	@media (max-width: 500px) {
		font-size: 16px;
	}
`;

const PurchaseListPrice = styled.div`
	display: flex;
	margin-top: 50px;
`;

const PurchaseListPriceNum = styled.div`
	color: var(--M3-black, #000);
	font-size: 24px;
	font-weight: 600;
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
