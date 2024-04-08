import { BsGitlab } from 'react-icons/bs';
import { SiNotion, SiFigma } from 'react-icons/si';
import { Content, Icons, Line, Developer } from './FooterStyle';

function Footer() {
	return (
		<Content>
			<Icons>
				<span>
					<BsGitlab />
				</span>
				<span>
					<SiNotion />
				</span>
				<span>
					<SiFigma />
				</span>
			</Icons>
			<Line>
				{' '}
				<hr />{' '}
			</Line>
			<Developer>
				<div>
					{' '}
					BE: 류효종 유경아 이정은
					<br />
					FE: 김고은 김지윤 임예림 정한석{' '}
				</div>
			</Developer>
		</Content>
	);
}

export default Footer;
