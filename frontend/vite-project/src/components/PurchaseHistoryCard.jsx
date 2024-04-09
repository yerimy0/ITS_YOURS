import styled from 'styled-components';

const PurchaseHistoryCard = () => {
	return (
		<PurchaseCardWrap>
			<ImageBox>
				<ForPurchaseListImage src="./complete.png" alt="" />
			</ImageBox>
			<PurchaseListTitle >
				점프 투 파이썬
				<PurchaseListPrice >
					<PurchaseListPriceNum >27,000</PurchaseListPriceNum>
					<PurchaseListWon >원</PurchaseListWon>
				</PurchaseListPrice>
				<PurchaseListSeller>정한석</PurchaseListSeller>
			</PurchaseListTitle>
			<PurchaseListBtnBox>
				<DeleteBtnBox>
					<DeleteBtn>삭제</DeleteBtn>
				</DeleteBtnBox>
			</PurchaseListBtnBox>
		</PurchaseCardWrap>
	);
};

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
  flex-direction: column-reverse;
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

const PurchaseListBtnBox = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-left: 1000px;
	margin-top: 100px;
`;

const DeleteBtnBox = styled.div`
	margin-left: auto; /* 버튼을 오른쪽으로 정렬 */
`;
const DeleteBtn = styled.button`
	width: 66px;
	height: 53px;
	border-radius: 20px;
	border: 1px solid #ded8e1;
	background: #fff;
	color: #000;
	font-family: SUIT;
	font-size: 16px;
	font-weight: 700;
	margin: 3px;
	&:hover {
		cursor: pointer;
	}
`;
