import React, { useState } from 'react';
import {
	ModalWrap,
	ModalContent,
	Title,
	Text,
	ReportUl,
	ReportLi,
	Buttons,
	CancelButton,
	OkButton,
} from './ReportModalStyle';

function ReportModal({ isOpen, onClose }) {
	const [reportType, setReportType] = useState('');

	const handleReportTypeChange = type => {
		setReportType(type);
	};

	const handleReport = () => {
		// 여기서 선택된 신고 유형(reportType)을 처리하는 로직 작성
		console.log('신고 유형:', reportType);
		// 신고 처리 후 모달 닫기
		onClose();
	};

	return (
		<ModalWrap open={isOpen}>
			<ModalContent>
				<Title>이 사용자를 신고하시겠습니까?</Title>
				<Text>신고 유형을 선택해 주세요.</Text>
				<ReportUl>
					<ReportLi onClick={() => handleReportTypeChange('비매너 사용자입니다.')}>
						비매너 사용자입니다.
					</ReportLi>
					<ReportLi onClick={() => handleReportTypeChange('전문판매업자 같습니다.')}>
						전문판매업자 같습니다.
					</ReportLi>
					<ReportLi onClick={() => handleReportTypeChange('거래 중 분쟁이 발생했습니다.')}>
						거래 중 분쟁이 발생했습니다.
					</ReportLi>
					<ReportLi onClick={() => handleReportTypeChange('사기가 의심됩니다.')}>
						사기가 의심됩니다.
					</ReportLi>
					<ReportLi onClick={() => handleReportTypeChange('다른 문제가 있습니다.')}>
						다른 문제가 있습니다.
					</ReportLi>
					<ReportLi onClick={() => handleReportTypeChange('욕설/비방/혐오표현을 합니다.')}>
						욕설/비방/혐오표현을 합니다.
					</ReportLi>
					<ReportLi onClick={() => handleReportTypeChange('연애 목적의 대화를 시도합니다.')}>
						연애 목적의 대화를 시도합니다.
					</ReportLi>
					<ReportLi onClick={() => handleReportTypeChange('부적절한 성적 행위를 합니다.')}>
						부적절한 성적 행위를 합니다.
					</ReportLi>
				</ReportUl>
				<Buttons>
					<CancelButton onClick={onClose}>취소</CancelButton>
					<OkButton onClick={handleReport}>신고하기</OkButton>
				</Buttons>
			</ModalContent>
		</ModalWrap>
	);
}

export default ReportModal;
