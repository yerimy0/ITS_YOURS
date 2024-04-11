import React, { useEffect, useState } from 'react';
import { SellerProfile, Profile, ProfileImg, Div, NickName, Category } from './SellerProfileStyle';
import instance from '../../../apis/axiosInstance';
function SellerProfileWrap({ sellerId }) {
	const [sellerData, setSellerData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await instance.get(`/api/members/me?id=${sellerId}`);
				setSellerData(res.data);
			} catch (err) {
				console.error('셀러 데이터를 불러오는 중 에러 발생:', err);
			}
		};
		fetchData();
	}, [sellerId]);

	return (
		<>
			<SellerProfile>
				<Profile>
					<ProfileImg src={sellerData.profilePic} alt={sellerData.nickname + '프로필'} />
				</Profile>
				<Div>
					<NickName className="nickNAme">{sellerData.nickname}</NickName>
					<Category>
						{sellerData.region} | {sellerData.univName}
					</Category>
				</Div>
			</SellerProfile>
		</>
	);
}

export default SellerProfileWrap;
