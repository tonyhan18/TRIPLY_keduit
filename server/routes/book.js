var express = require("express");
var router = express.Router();
var mysql = require("mysql2/promise");
const postUserCheck = require("../controller/user");
var conn = require("../db/index");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/create", async function (req, res) {
  const {
    useremail,
    flight,
    airlineid,
    from,
    to,
    depdate,
    arrdate,
    deptime,
    arrtime,
    price,
  } = req.body;
  if (postUserCheck(useremail)) {
    console.log(deptime);
    // 	const query2 = `INSERT INTO tb_user(useremail, userpw, username, usertel)
    // VALUES('${useremail}', '${userpw}','${username}', '${usertel}')`;
    // const query = `INSERT INTO tb_book( useremail, flight, airlineid, username, from, to, depdate, arrdate, deptime, arrtime, price) VALUES ('apdlf@gmaile.com', '${flight}', '${airlineid}', '홍길동', '${from}', '${to}', '${depdate}', '${arrdate}', '${deptime}', '${arrdate}', '${price}');`;
    // const query2 = `INSERT INTO `DB1`.`tb_book` (`booknum`, `useremail`, `flight`, `airlineid`, `username`, `from`, `to`, `depdate`, `arrdate`, `deptime`, `arrtime`, `price`) VALUES ('20220405', 'apdlf@gmaile.com', 'OZ392', 'AAR', '홍길동', 'ICN', 'KIX', '2022-04-05', '2022-04-05', '13:00', '15:00', '400000');`
    // const query2 = `INSERT INTO tb_book("1",'test', 'test', 'tes', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test')`;
    const query = `INSERT INTO tb_book(useremail, flight, airlineid, username, start, end, depdate, arrdate, deptime, arrtime, price) 
		VALUES('${useremail}', '${flight}', '${airlineid}', '홍길동', '${from}', '${to}', '${depdate}', '${arrdate}', '${deptime}', '${arrtime}', '${price}')`;
    // 	const query2 = `INSERT INTO tb_user(useremail, userpw, username, usertel)
    // VALUES("${useremail}", "${userpw}","${username}", "${usertel}")`;
    // const query = `INSERT INTO tb_book(useremail, flight, airlineid, username, from, to, depdate, arrdate, deptime, arrtime, price) VALUES ('apdlf@gmail.com', 'oz392', "AAR", "홍길동", "ICN", "KIX", "2022-04-05", "2022-04-05", "13:00", "15:00", "400000");`;
    await conn.query(query).catch((error) => {
      if (error) throw error;
      return res.status(409).send({
        success: false,
        message: "씨발",
      });
    });
    return res.status(200).send({
      success: true,
      message: "성공했습니다",
    });
  }
});

module.exports = router;
