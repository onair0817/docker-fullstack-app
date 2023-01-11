// express 모듈 불러오기
const express = require('express');

// express 포트 지정
const PORT = 8080;
const HOST = '0.0.0.0';

// app 모듈 호출
const app = express();
app.get('/', (req, res) => {
    res.send("반가워요!!!!!!!")
});

// app 서버 구동
app.listen(PORT, HOST);
console.log("Server is running")
