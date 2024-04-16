import {
	Box4,
	Slogan,
	Title,
	TitleName,
	PRCOntainer,
	PRContent,
	EachInfo,
	SmallIcon,
	SmallTitle,
	CountNum,
	Unit,
} from '../HomeStyle';
import { useEffect, useState } from 'react';
import { infos } from './data';
import useCountUp from '../../../../hooks/CountingUp';
import { fetchDefaultProducts } from '../../../../apis/service/product.api';

function Section5() {
	const [bookInfo, setBookInfo] = useState({
		image: 'sub_users.png',
		content: '거래중인 도서수',
		num: 152,
		end: '권',
	});

	// 현재 거래중인 도서 권수 업데이트
	useEffect(() => {
		async function booksquantity() {
			const quantity = await fetchDefaultProducts();
			setBookInfo({
				image: 'sub_users.png',
				content: '거래중인 도서수',
				num: `${quantity.length}`,
				end: '권',
			});
			infos.push(bookInfo);
		}
		booksquantity();
	}, []);
	return (
		<Box4>
			<Title className="sec4_title">
				<TitleName>IN 서울, JOIN 이제너해</TitleName>
				<Slogan>선배, 후배, 동기 우리학교부터 옆학교까지 이 전공책 이제너해</Slogan>
			</Title>
			<PRCOntainer>
				<PRContent>
					{infos.map((info, i) => (
						<EachInfo key={`List-info-${i}`}>
							<SmallIcon src={`/${info.image}`} />
							<SmallTitle>{info.content}</SmallTitle>
							<Unit>
								<CountUp end={info.num} />
								<p>{info.end}</p>
							</Unit>
						</EachInfo>
					))}
				</PRContent>
			</PRCOntainer>
		</Box4>
	);
}

function CountUp({ end }) {
	const count = useCountUp(end);
	return <CountNum>{count}</CountNum>;
}
export default Section5;
