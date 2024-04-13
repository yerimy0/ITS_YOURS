const nodemailer = require('nodemailer');
require('dotenv').config();
const fs = require('fs');
const path = require('path');

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});

async function sendCustomEmail({ to, subject, text, newPassword }) {
	try {
		// HTML 템플릿 파일을 동기적으로 읽기
		let templatePath = path.join(__dirname, 'EmailForm.html');
		let html = fs.readFileSync(templatePath, 'utf8'); // HTML 파일 내용을 읽습니다.

		// {{newPassword}} 부분을 사용자의 임시 비밀번호로 치환
		html = html.replace('{{newPassword}}', newPassword);

		// mailOptions 객체를 여기서 정의합니다.
		const mailOptions = {
			from: process.env.EMAIL_USER,
			to,
			subject,
			html, // 수정된 html을 사용
		};

		const result = await transporter.sendMail(mailOptions);
		console.log('Email sent:', result);
		return result;
	} catch (error) {
		console.error('Failed to send email:', error);
		throw error;
	}
}

module.exports = { sendCustomEmail };
