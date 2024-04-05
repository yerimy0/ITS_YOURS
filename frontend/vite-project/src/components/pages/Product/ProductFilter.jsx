import React, { useState, useRef, useEffect } from 'react';
import { LuSlidersHorizontal } from "react-icons/lu";
import { FilterButton, FilterContent} from './ProductFilterStyle';
import ProductFilterLogic from './ProductFilterLogic';

const ProductFilter = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const filterRef = useRef(null);

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
    </>
  );
};

export default ProductFilter;
