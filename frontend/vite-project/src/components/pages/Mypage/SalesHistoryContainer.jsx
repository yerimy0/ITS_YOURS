import styled from "styled-components";
import SalesHistoryCard from "../../SalesHistoryCard";

const SalesHistoryContainer = () => {
  return (
    <SalesHistoryWrap className="sales_history_wrap">
      <ForSalesList className="for_sales_list">
        <SalesHistoryCard />
      </ForSalesList>
      <ForSalesList className="for_sales_list">
        <SalesHistoryCard />
      </ForSalesList>
      <ForSalesList className="for_sales_list">
        <SalesHistoryCard />
      </ForSalesList>
      <ForSalesList className="for_sales_list">
        <SalesHistoryCard />
      </ForSalesList>
    </SalesHistoryWrap>
  );
};

const SalesHistoryWrap = styled.section`
  padding: 20px;
  margin: 20px 100px;
`;

const ForSalesList = styled.div`
  width: 95%;
  border-top: 1px solid #ded8e1;
  border-bottom: 1px solid #ded8e1;
  height: auto;
  padding: 10px;
`;

export default SalesHistoryContainer;
