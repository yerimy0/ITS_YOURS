import React, { useState, useRef, useEffect } from 'react';
import { LuSlidersHorizontal } from "react-icons/lu";
import { Alignments, Bilnd, Alignment, Filter, FilterButton, FilterContent} from './ProductFilterStyle';
import ProductFilterLogic from './ProductFilterLogic';

const ProductFilter = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const filterRef = useRef(null);
  const [latestClicked, setLatestClicked] = useState(false);
  const [lowCostClicked, setLowCostClicked] = useState(false);

  const handleLatestClick = () => {
    setLatestClicked(true);
    setLowCostClicked(false); // 다른 버튼은 클릭되지 않은 상태로 설정
  };

  const handleLowCostClick = () => {
    setLowCostClicked(true);
    setLatestClicked(false); 
  };

  //필터 창 열기
  const openFilter = () => {
    setShowButtons(true);
  };

  //필터 창 닫기
  const closeFilter = () => {
    setShowButtons(false);
  };

  // 필터 창 외부 클릭 시 창 닫기
  const handleClickOutside = (event) => {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      closeFilter();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
     <Alignments>
          <Bilnd>정렬</Bilnd>
          <Alignment onClick={handleLatestClick} isActive={latestClicked} >최신순</Alignment>
          <Alignment onClick={handleLowCostClick} isActive={lowCostClicked} >저가순</Alignment>
        </Alignments>
        <Filter>
          <FilterButton onClick={openFilter}>
          <LuSlidersHorizontal size="24" />
          필터
          </FilterButton>
          {showButtons && (
            <FilterContent ref={filterRef}>
              <ProductFilterLogic onUpdateFilteredBooks={setFilteredBooks} onCloseFilter={closeFilter} />
              {/* 필터링된 책 목록 출력 */}
              {filteredBooks.map((book, index) => (
                <div key={index}>{/* 책 정보 표시 */}</div>
              ))}
            </FilterContent>
          )}
        </Filter>
    </>
  );
};

export default ProductFilter;
