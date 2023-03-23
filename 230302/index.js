const express = require("express");
const app = express();
const PORT = 8080;

const cors = require("cors");
app.use(cors());

app.get("/api/info", (req,res)=>{
  return res. json({
    name :"jony",
    job : "tutor",
});
});
app.get("/api/info2", (req,res)=>{
  return res. json({
    name :"원",
    job : "ㅎ",
    a:'1',
});
});


app.listen(PORT, ()=> console.log(`this server is listening on ${PORT}`));