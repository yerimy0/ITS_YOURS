import {
	Buttons,
	Button,
	UserImg,
	Writer,
	Date,
	CommentsBox,
	CommentInput,
	CommentNum,
	Comments,
	EachComment,
	CommentTexts,
	InnerTop,
	InnerBottom,
	Comment,
	CommentContext,
	CommentList,
} from '../CommunityDetail/DetailStyle';

import { Line } from '../CommunityList/CommunityStyle';

function CommentSection() {
	return (
		<CommentsBox>
			<CommentList>
				<CommentNum>4개의 댓글</CommentNum>
				<Comments>
					<EachComment>
						<Comment>
							<UserImg src="/main_character.png"></UserImg>
							<CommentTexts>
								<InnerTop>
									<Writer>개발세발자</Writer>
									<Date>30초전</Date>
								</InnerTop>
								<InnerBottom>
									<CommentContext>
										<p>교수님 휴강 휴강 휴강 제발 휴강 갑자기 일 생겨서 휴강 해줘요</p>
									</CommentContext>
									<Buttons>
										<Button>수정</Button>
										<Button>삭제</Button>
									</Buttons>
								</InnerBottom>
							</CommentTexts>
						</Comment>
						<Line>
							<hr />
						</Line>
					</EachComment>
				</Comments>
			</CommentList>
			<CommentInput></CommentInput>
		</CommentsBox>
	);
}

export default CommentSection;
