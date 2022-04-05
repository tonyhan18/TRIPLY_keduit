var express = require("express");
var router = express.Router();
var mysql = require("mysql2/promise");
var conn = require("../db/index");

const postUserCheck = async (useremail) => {
  // 아이디검증
  const query = `SELECT useremail from tb_user where useremail ='${useremail}'`;
  const [users] = await conn.query(query);
  if (users.length === 0) {
    return false;
  }
  return true;
};
module.exports = postUserCheck;
