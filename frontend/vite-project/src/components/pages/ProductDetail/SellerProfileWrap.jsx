import { SellerProfile, Profile, ProfileImg, Div, NickName, Category } from './SellerProfileStyle';

function SellerProfileWrap() {
	return (
		<>
			<SellerProfile>
				<Profile>
					<ProfileImg src="/book_cover.jpg" />
				</Profile>
				<Div>
					<NickName className="nickNAme">능이버섯</NickName>
					<Category>성북구 | 서울대학교</Category>
				</Div>
			</SellerProfile>
		</>
	);
}

export default SellerProfileWrap;
