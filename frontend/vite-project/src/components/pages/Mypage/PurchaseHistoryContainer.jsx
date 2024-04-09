import styled from 'styled-components';
import PurchaseHistoryCard from '../../PurchaseHistoryCard';

const PurchaseHistoryContainer = () => {
	return (
		<PurchaseHistoryWrap className="sales_history_wrap">
			<ForPurchaseList className="for_sales_list">
				<PurchaseHistoryCard />
			</ForPurchaseList>
			<ForPurchaseList className="for_sales_list">
				<PurchaseHistoryCard />
			</ForPurchaseList>
			<ForPurchaseList className="for_sales_list">
				<PurchaseHistoryCard />
			</ForPurchaseList>
			<ForPurchaseList className="for_sales_list">
				<PurchaseHistoryCard />
			</ForPurchaseList>
		</PurchaseHistoryWrap>
	);
};

const PurchaseHistoryWrap = styled.section`
	padding: 20px;
	margin: 20px 100px;
`;

const ForPurchaseList = styled.div`
	width: 95%;
	border-top: 1px solid #ded8e1;
	border-bottom: 1px solid #ded8e1;
	height: auto;
	padding: 10px;
`;

export default PurchaseHistoryContainer;
