import {BookInfo, Div, SubTilte, SubContent } from './BookInfoStyle';

function BookInfoWrap () {
  return (
    <BookInfo>
      <Div>
        <SubTilte>저자</SubTilte>
        <SubContent>데이비드 머니 해리스, 사라 L.해리스 저자(글) ·강영흥, 박춘명, 지석근, 황지원 번역</SubContent>
      </Div>
      <Div>
        <SubTilte>출판사</SubTilte>
        <SubContent>카오스북</SubContent>
      </Div>
      <Div>
        <SubTilte>상품 상태</SubTilte>
        <SubContent>거의 새것</SubContent>
      </Div>
    </BookInfo>
  )
}

export default BookInfoWrap;