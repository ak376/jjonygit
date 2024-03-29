const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 8080;


const cors = require("cors");
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const { pool } = require("./db");

app.post("/test/:menu_id", async (req,res)=>{
  try{
    console.log(req.params);
    console.log(req.body);
    console.log(req.query);
    return res.json({});
  }catch(error){
    console.log(error);
  }
})

app.get("/api/menus", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM menus");
    if (data[0]) {
      return res.json(data[0]);
    }
  } catch (error) {
    
    console.log(error);
    return res.json(error);
  }
});

// app.get("/api/menus", async (req, res) => {
//   return res.json({"TEST":"OK", TYPE:"GET"});
 
// });
app.post("/api/menus", async (req, res) => {
  console.log(req.body);
  try{
    const data = await pool.query(`INSERT INTO menus (menu_name, menu_description,menu_img_link)
    VALUES (?, ?,?)`, [req.body.menu_name, req.body.menu_description],"none");

    return res.json(data);

  }catch(error){
    console.log(error);
    return res.json(error);
  }
  
 
});

app.patch("/api/menus/:id", async (req, res) => {
  try {
    const data = await pool.query(
      `
        UPDATE menus 
        SET menu_name="${req.body.menu_name}", menu_description="${req.body.menu_description}", menu_img_link="${req.body.menu_img_link}"
        WHERE menu_id=${req.params.id}
      `
    );
    if (data[0]) {
      return res.json(data[0]);
    }
  } catch (error) {
    console.log(error);
  }
});

app.delete("/api/menus/:id", async (req, res) => {
  try {
    const data = await pool.query(
      `
        DELETE FROM menus WHERE menu_id=${req.params.id}
      `
    );
    if (data[0]) {
      return res.json(data[0]);
    }
  } catch (error) {
    console.log(error);
  }
});
app.listen(PORT, () => console.log(`this server is listening on ${PORT}`));
