// 기본 설정
const express = require("express");
const app = express();
const cors = require('cors');
const PORT = 3000;

// 정적 파일 불러오기
app.use(express.static(__dirname + "/public"));

app.use(cors({
    origin: '*', // 모든 출처 허용 옵션. true 를 써도 된다.
}));

// 라우팅 정의
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//더미 api
app.get("/api/dummy",(_,res)=>{
	console.log("call /api/dummy");

	res.status(200).json({
		"message":"TEST"
	})
})

app.post("/api/savedummy",({res})=>{
	console.log("call savedummy");

	res.status(200).json({
		"success":true
	})
})

// 서버 실행
app.listen(PORT, () => {
  console.log(`Listen : ${PORT}`);
});
