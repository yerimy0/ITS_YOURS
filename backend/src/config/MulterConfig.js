const multer = require('multer');
const path = require('path');

// 파일 저장을 위한 storage 정의
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // 파일 저장 경로
  },
  filename: function (req, file, cb) {
    // 파일명 설정 (fieldname + timestamp + 확장자)
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  }
});

// 파일 필터링 설정
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true); // 이미지 파일만 허용
  } else {
    cb(new Error('이미지 파일만 업로드 가능합니다.'), false);
  }
};

// multer 설정 적용
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5 // 최대 파일 크기 (5MB)
  },
  fileFilter: fileFilter
});

module.exports = upload;