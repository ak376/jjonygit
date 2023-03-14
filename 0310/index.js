const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const app = express();
const PORT = 8080;


app.use(morgan('dev'));

//템플릿 엔진으로 ejs 사용
app.set('view engine', 'ejs');
// ejs에서 활용할 경로를 ./views 폴더로 활용
app.set('views','./views');


app.get("/holder", async(req,res)=>{
  const result = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
  
  //ejs에서 화면을 그리는 방식
  // index.ejs를 그린다;
  res.render('holder-list', {data:result.data})
})

// axios로 jsonplaceholder 요청 -> 데이터를 그려보기
// 서버 끄고 npm i axios 후 다시 서버 시작
app.get("/holder/:id", async(req,res)=>{
  const result = await axios.get(`https://jsonplaceholder.typicode.com/todos/${req.params.id}`);

  //holder.ejs를 해석 -> 없으니깐 만들기
  res.render('holder', {data:result.data});
})

app.listen(PORT, ()=> console.log(`${PORT} 서버 구동중`));