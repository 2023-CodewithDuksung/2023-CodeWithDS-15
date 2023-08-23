const { pool } = require("../../config/taekyDB");
const useDao = require("../dao/taekyDao"); //sql쿼리 이용한 return

async function getTitleRepair() {
  const connection = await pool.getConnection(async (conn) => conn);
  const result = await useDao.selectTitleRepair(connection);
  connection.release(); //db연결해제
  return result;
}

async function getRepair(repair_id) {
  const connection = await pool.getConnection(async (conn) => conn);
  const result = await useDao.selectRepair(connection, repair_id);
  connection.release();
  return result;
}

async function getTitleNotice() {
  const connection = await pool.getConnection(async (conn) => conn);
  const result = await useDao.selectTitleNotice(connection);
  connection.release();
  return result;
}

async function getNotice(notice_id) {
  const connection = await pool.getConnection(async (conn) => conn);
  const result = await useDao.selectNotice(connection, notice_id);
  connection.release();
  return result;
}

async function getTitleApply() {
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
}

module.exports = {
  getTitleRepair,
  getRepair,
  getTitleNotice,
  getNotice,
  getTitleApply,
  getApply,
};
