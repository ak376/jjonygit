//로그의 레벨 7
// error, warn, info, http, verbose, debug, silly
//error -> 에러기록
//warn -> 에러는 아니지만 유의내용
//info -> 내용
//error -> 상세한 데이터들


const express = require('express');
const morgan = require('morgan');
const logger = require('./utills/log');
const app = express();
app.use(morgan('dev'));
const PORT = 8080;

app.use(express.json());
const cors=require("cors");
app.use(cors());
app. use(express.static(__dirname+"/views"));


const fs = require("fs");
//원격 로그 수집 시스템(elastic stack)
//여러군데 모여있는 로그를 한군데서 조회하기위함 <<==개인 공부필요함
// app.get("/api/logs", (req,res)=>{
//   return res.json({
//     test:"OK"
//   });
// });



let retData ={};

app.get("/api/logs", (req,res)=>{
  logger.error("error 메세지");
  logger.warn("warn 메세지");
  logger.info("info 메세지");
  logger.http("http 메세지")
  logger.debug("debug 메세지");
  fs.readFile("./logs/2023-03-10-15.log",  "utf-8", (err,data)=>{
    const line =data.split('\r\n').slice(0,-1);
    const datajson = line.map((data)=>JSON.parse(data));
    console.log(datajson);
    return res.json(datajson);
  })
    
  
})



app.listen(PORT, ()=> console.log(`${PORT} 서버 가동중`));
