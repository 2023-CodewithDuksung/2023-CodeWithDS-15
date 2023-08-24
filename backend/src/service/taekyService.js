const { pool } = require("../../config/taekyDB");
const useDao = require("../dao/taekyDao");

async function postRepair(
  repair_id,
  buildname,
  room,
  name,
  fixcontent,
  state,
  title
) {
  const connection = await pool.getConnection(async (conn) => conn);
  const result = await useDao.insertRepair(
    connection,
    repair_id,
    buildname,
    room,
    name,
    fixcontent,
    state,
    title
  );
  connection.release();
  return result;
}
async function delRepair(repair_id) {
  const connection = await pool.getConnection(async (conn) => conn);
  const result = await useDao.deleteRepair(connection, repair_id);
  connection.release();
  return result;
}
async function postApply(
  apply_id,
  stuno,
  name,
  startDate,
  endDate,
  days,
  address,
  reason
) {
  const connection = await pool.getConnection(async (conn) => conn);
  const result = await useDao.insertApply(
    connection,
    apply_id,
    stuno,
    name,
    startDate,
    endDate,
    days,
    address,
    reason
  );
  connection.release();
  return result;
}
async function delApply(apply_id) {
  const connection = await pool.getConnection(async (conn) => conn);
  const result = await useDao.insertApply(
    connection,
    apply_id,
    stuno,
    name,
    startDate,
    endDate,
    days,
    address,
    reason
  );
  connection.release();
  return result;
}
module.exports = {
  postRepair,
  delRepair,
  postApply,
  delApply,
};
