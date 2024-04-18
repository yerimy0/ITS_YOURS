import { BsGitlab } from 'react-icons/bs';
import { SiNotion, SiFigma } from 'react-icons/si';
import { Content, Icons, Line, Developer } from './FooterStyle';

function Footer() {
	return (
		<Content>
			<Icons>
				<a href="https://kdt-gitlab.elice.io/sw_track/class_08/web_project_ii/team08/its-yours2">
					<BsGitlab />
				</a>
				<a href="https://quark-dianella-5e6.notion.site/8-ef850840febd4931939e33d674e6964e?pvs=4">
					<SiNotion />
				</a>
				<a href="https://www.figma.com/files/project/217859975/Team-project?fuid=1329746140332818240">
					<SiFigma />
				</a>
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
