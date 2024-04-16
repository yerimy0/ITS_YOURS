import React, { useEffect, useState } from 'react';
import { SellerProfile, Profile, ProfileImg, Div, NickName, Category } from './SellerProfileStyle';
import { fetchSellerDataById } from '../../../apis/service/SellerApi';

function SellerProfileWrap({ id }) {
	const [sellerData, setSellerData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const sellerData = await fetchSellerDataById(id);
				setSellerData(sellerData);
			} catch (err) {
				console.error('셀러 데이터를 불러오는 중 에러 발생:', err);
			}
		};
		fetchData();
	}, [id]);

	return (
		<SellerProfile>
			<Profile>
				<ProfileImg src={sellerData.profilePic} alt={sellerData.nickName + ' 프로필'} />
			</Profile>
			<Div>
				<NickName>{sellerData.nickName}</NickName>
				<Category>
					{sellerData.region} | {sellerData.schoolName}
				</Category>
			</Div>
		</SellerProfile>
	);
}

export default SellerProfileWrap;
