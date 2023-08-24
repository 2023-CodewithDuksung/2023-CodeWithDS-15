const { pool } = require("../../config/database");
const useDao = require("../dao/taekyDao"); //sql쿼리 이용한 return

exports.getRepairRecords = async function (userId) {
  const connection = await pool.getConnection(async (conn) => conn);
  const result = await useDao.selectRepairRecords(connection, userId);
  connection.release(); //db연결해제
  return result[0];
};

exports.getRepairRecordDetail = async function (userId) {
  const connection = await pool.getConnection(async (conn) => conn);
  const result = await useDao.selectRepairRecordDetail(connection, userId);
  connection.release(); //db연결해제
  return result[0];
};

/*async function getTitleNotice() {
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
*/
/*async function getTitleApply() {
  const connection = await pool.getConnection(async (conn) => conn);
  const result = await useDao.selectTitleApply(connection);
  connection.release();
  return result;
}*/

/*async function getApply(apply_id) {
  const connection = await pool.getConnection(async (conn) => conn);
  const result = await useDao.selectApply(connection, apply_id);
  connection.release();
  return result;
}*/

//점호방송 조회
async function getBroadcast(date) {
  const connection = await pool.getConnection(async (conn) => conn);
  const result = await useDao.selectbroadcast(connection, date);
  connection.release();
  return result;
}

//커뮤니티 (일상,장터) 글 리스트 조회
async function getCommu(topic) {
  const connection = await pool.getConnection(async (conn) => conn);
  const result = await useDao.selectCommu(connection, topic);
  connection.release();
  return result;
}

//커뮤니티 (일상,장터) 글 본문 조회
async function getCommuContent(topic, title) {
  const connection = await pool.getConnection(async (conn) => conn);
  const result = await useDao.selectCommuContent(connection, topic, title);
  connection.release();
  return result;
}

//배달팟 글 리스트 조회
async function getDelivery() {
  const connection = await pool.getConnection(async (conn) => conn);
  const result = await useDao.selectDelivery(connection);
  connection.release();
  return result;
}
//배달팟 글 본문 조회
async function getDeliveryContent(title) {
  const connection = await pool.getConnection(async (conn) => conn);
  const result = await useDao.selectDeliveryContent(connection, title);
  connection.release();
  return result;
}

module.exports = {
  getBroadcast,
  getCommu,
  getCommuContent,
  getDelivery,
  getDeliveryContent,
};
