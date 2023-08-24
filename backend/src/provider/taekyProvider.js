const { pool } = require("../../config/database");
const useDao = require("../dao/taekyDao"); //sql쿼리 이용한 return

exports.getRepairRecords = async function (userId) {
  const connection = await pool.getConnection(async (conn) => conn);
  const result = await useDao.selectRepairRecords(connection, userId);
  connection.release(); //db연결해제
  return result[0];
}

exports.getRepairRecordDetail = async function (userId) {
  const connection = await pool.getConnection(async (conn) => conn);
  const result = await useDao.selectRepairRecordDetail(connection, userId);
  connection.release(); //db연결해제
  return result[0];
}

/*async function getTitleApply() {
  const connection = await pool.getConnection(async (conn) => conn);
  const result = await useDao.selectTitleApply(connection);
  connection.release();
  return result;
}

async function getApply(apply_id) {
  const connection = await pool.getConnection(async (conn) => conn);
  const result = await useDao.selectApply(connection, apply_id);
  connection.release();
  return result;
}*/
