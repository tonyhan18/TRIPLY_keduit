var express = require("express");
var router = express.Router();
var mysql = require("mysql2/promise");
const postUserCheck = require("../controller/user");
var conn = require("../db/index");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/search", async function (req, res) {
  const { deptime, arrtime, airline, useremail } = req.body;
  console.log(deptime, arrtime, airline, useremail);
  if (postUserCheck(useremail)) {
    const query = `SELECT * from tb_flight where airline="${airline}" and deptime >= "${deptime}" and arrtime <= "${arrtime}"`;
    const [rows] = await conn.query(query);
    res.send({ success: true, flight: rows, message: "데이터를 찾았습니다" });
  } else {
    res.send({ success: false, flight: null, message: "로그인 오류" });
  }
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
