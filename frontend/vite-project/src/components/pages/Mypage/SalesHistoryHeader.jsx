import styled from "styled-components";

const SalesHistoryHeader = () => {
  return (
    <InSalesHistoryHeader claaName="sales_history_header">
      <SalesHistoryTitle className="sales_history_title">
        나의 판매내역
      </SalesHistoryTitle>
      <SalesHistorySection2 className="sales_hitory_section2">
        <SalesStatus className="sales_status">
          <ForSale>판매중</ForSale>
          <SalesCompleted>판매완료</SalesCompleted>
        </SalesStatus>
      </SalesHistorySection2>
    </InSalesHistoryHeader>
  );
};

const InSalesHistoryHeader = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 100%;
  align-items: center;
`;

const SalesHistoryTitle = styled.h1`
  font-family: SUIT;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const SalesHistorySection2 = styled.div`
  display: flex;
  width: auto;
  align-items: flex-start;
  margin: 20px;
`;

const SalesStatus = styled.div`
  display: flex;
  width: 1000px;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

const ForSale = styled.button`
  width: 207px;
  border-radius: 20px;
  background: #009dff;
  color: #fff;
  text-align: center;
  font-family: SUIT;
  font-size: 20px;
  font-weight: 300;
  border: 0px;
  height: 100%;
`;

const SalesCompleted = styled.button`
  width: 207px;
  border-radius: 20px;
  border: 1px solid #ded8e1;
  color: #ded8e1;
  text-align: center;
  font-family: SUIT;
  font-size: 20px;
  font-weight: 300;
  background: #fff;
  height: 100%;
`;

export default SalesHistoryHeader;
