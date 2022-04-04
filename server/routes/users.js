var express = require("express");
var router = express.Router();
var mysql = require("mysql2/promise");
var conn = require("../db/index");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/create", async function (req, res) {
  const { useremail, userpw, username, usertel } = req.body;
  const query = `SELECT useremail from tb_user where useremail ='${useremail}'`;
  const [rows] = await conn.query(query);
  if (rows.length) {
    return res.status(409).send({
      success: false,
      message: "중복된 아이디가 존재합니다.",
    });
  }
  const query2 = `INSERT INTO tb_user(useremail, userpw, username, usertel)
  VALUES("${useremail}", "${userpw}","${username}", "${usertel}")`;
  console.log("why");
  await conn.query(query2).catch((error) => {
    if (error) throw error;
    return res.status(409).send({
      success: false,
      message: "중복된 아이디가 존재합니다.",
    });
  });
  return res.status(200).send({
    success: true,
    message: "성공했습니다.",
  });
});

router.post("/login", async function (req, res) {
  const { useremail, userpw } = req.body;

  // 아이디검증
  const query = `SELECT useremail from tb_user where useremail ='${useremail}'`;
  const [users] = await conn.query(query);
  if (users.length === 0) {
    return res
      .status(401)
      .send({ success: false, message: "일치하는 유저가 없습니다" });
  }

  // 비밀번호 검증
  const query2 = `
    SELECT userpw FROM tb_user WHERE userpw = '${userpw}';
  `;
  const [passwd] = await conn.query(query2);
  if (passwd.length === 0) {
    return res
      .status(401)
      .send({ success: false, message: "패스워드가 일치하지 않습니다" });
  }

  const token = req.app.get("jwt-secret");
  console.log(token);
  res.send({ success: true, token });
});
module.exports = router;
