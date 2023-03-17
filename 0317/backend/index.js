const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const morgan = require("morgan");
const PORT = 8081;
const fs = require('fs');

const dotenv = require("dotenv");
//env파일 읽기 가능
dotenv.config();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  //process.env . 작성한 변수명
  console.log(process.env.CLIENT_ID);
  console.log(process.env.CLIENT_SECRET);
  return res.json({ test: "HELLO" });
});

// 파일 읽어서 리턴
app.get("/api/data", (req, res) => {
  try{
    fs.readFile('./uploads/chart.json','utf8',(error, data) =>{
      if(error){
        console.log(error);
      }

      return res.json(JSON.parse(data));
    })
  }catch(error){
    console.log(error);
    return res.json(error);
  }
});

// 요청을 보내고 값을 파일로 저장
app.post("/api/data", async(req, res) => {
  const url = "https://openapi.naver.com/v1/datalab/search";
  const headers = {
    'X-Naver-Client-Id': process.env.CLIENT_ID,
    'X-Naver-Client-Secret': process.env.CLIENT_SECRET,
    'Content-Type': 'application/json',
  };

  console.log(req.body);

  
  const request_body = {
    // 필수값 startDate, endDate, timeUnit, keyword
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    timeUnit: req.body.timeUnit,
    keywordGroups: req.body.keywordGroups
          
  }
  try {
    console.log("1111");
    const result = await axios.post(url, request_body, {
      headers
    });
    console.log(result);
    fs.writeFile("./uploads/chart.json", JSON.stringify(result.data.results), function(err){
      console.log(err);
    })
    
    return res.json(result.data.results);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
});

//file delete
app.delete("/api/data", (req, res) => {});

app.listen(PORT, ()=> console.log(`${PORT}서버 가동중`));