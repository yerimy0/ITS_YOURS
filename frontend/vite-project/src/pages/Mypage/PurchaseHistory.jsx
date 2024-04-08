import styled from "styled-components";
import SalesHistoryHeader from "../../components/pages/Mypage/SalesHistoryHeader";
import SalesHistoryContainer from "../../components/pages/Mypage/SalesHistoryContainer";

function SalesHistory() {
  return (
    <SalesHistoryWrap>
      <SalesHistoryHeader />
      <SalesHistoryContainer />
    </SalesHistoryWrap>
  );
}

export default SalesHistoryCompleted;

const SalesHistoryWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
