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

async function sendCustomEmail({ to, subject, templateName, replacements }) {
	try {
		let templatePath = path.join(__dirname, `${templateName}.html`);
		let html = fs.readFileSync(templatePath, 'utf8');

		// replacements 객체에 있는 모든 키-값 쌍을 사용하여 템플릿 내용을 치환
		Object.keys(replacements).forEach(key => {
			html = html.replace(`{{${key}}}`, replacements[key]);
		});

		const mailOptions = {
			from: process.env.EMAIL_USER,
			to,
			subject,
			html,
		};

		const result = await transporter.sendMail(mailOptions);
		console.log('Email sent:', result);
		return result;
	} catch (error) {
		console.error('Failed to send email:', error);
		throw error;
	}
}

async function sendSignupVerificationEmail(email, verificationLink) {
	await sendCustomEmail({
		to: email,
		subject: '[이제너해] 회원가입 이메일 인증',
		templateName: 'SignupVerificationEmailForm',
		replacements: {
			verificationLink: verificationLink, // 인증 링크를 치환할 위치
		},
	});
}

async function sendQnAReplyEmail(email, question, answer) {
	await sendCustomEmail({
		to: email,
		subject: '[이제너해] QnA 답변',
		templateName: 'QnaAnswerForm',
		replacements: {
			question: question, // 질문을 치환할 위치
			answer: answer, // 답변을 치환할 위치
		},
	});
}

module.exports = { sendCustomEmail, sendSignupVerificationEmail, sendQnAReplyEmail };
