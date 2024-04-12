import { BookInfo, Div, SubTilte, SubContent } from './BookInfoStyle';

function BookInfoWrap({ author, publisher, condition }) {
	return (
		<BookInfo>
			<Div>
				<SubTilte>저자</SubTilte>
				<SubContent>{author}</SubContent>
			</Div>
			<Div>
				<SubTilte>출판사</SubTilte>
				<SubContent>{publisher}</SubContent>
			</Div>
			<Div>
				<SubTilte>상품 상태</SubTilte>
				<SubContent>{condition}</SubContent>
			</Div>
		</BookInfo>
	);
}

export default BookInfoWrap;
