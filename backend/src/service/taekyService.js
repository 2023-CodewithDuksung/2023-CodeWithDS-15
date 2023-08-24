const { pool } = require("../../config/database");
const useDao = require("../dao/taekyDao");
const baseResponse = require("../../config/baseResponseStatus");
const {response, errResponse} = require("../../config/response");

exports.postRepair = async function(userId, building, room, content) {
  try {
    const connection = await pool.getConnection(async (conn) => conn);
    const result = await useDao.insertRepair(connection, userId, building, room, content);
    console.log(result[0]);
    connection.release();
    return response(baseResponse.SUCCESS);
  } catch (e) {
    console.log("App - Error At postRepair,", e);
    return errResponse(baseResponse.DB_ERROR);
  }
}
exports.updateRepairConfirm = async function(repairId) {
  try {
    const connection = await pool.getConnection(async (conn) => conn);
    const result = await useDao.updateRepairConfirm(connection, repairId);
    console.log(result[0]);
    connection.release();
    return response(baseResponse.SUCCESS);
  } catch (e) {
    console.log("App - Error At updateRepairConfirm,", e);
    return errResponse(baseResponse.DB_ERROR);
  }
}

exports.updateRepairState = async function(repairId) {
  try {
    const connection = await pool.getConnection(async (conn) => conn);
    const result = await useDao.updateRepairState(connection, repairId);
    console.log(result[0]);
    connection.release();
    return response(baseResponse.SUCCESS);
  } catch (e) {
    console.log("App - Error At updateRepairState,", e);
    return errResponse(baseResponse.DB_ERROR);
  }
}
/*exports.delRepair = async function (userId) {
  try {
    const connection = await pool.getConnection(async (conn) => conn);
    const repairId = await useDao.findRepairIdByUserId(connection, userId);
    const result = await useDao.deleteRepair(connection, repairId[0].id);
    console.log(result[0]);
    connection.release();
    return response(baseResponse.SUCCESS);
  } catch (e) {
    console.log("App - Error At delRepair,", e);
    return errResponse(baseResponse.DB_ERROR);
  }
}*/

exports.postApply = async function (userId, startDate, endDate, days, address, reason) {
  try {
    const connection = await pool.getConnection(async (conn) => conn);
    const postApplyParams = [userId, startDate, endDate, days, address, reason]
    const result = await useDao.insertApply(connection, postApplyParams);
    console.log(result[0]);
    connection.release();
    return response(baseResponse.SUCCESS);
  } catch (e) {
    console.log("App - Error At poasApply,", e);
    return errResponse(baseResponse.DB_ERROR);
  }
}

/*async function delApply(apply_id) {
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
}*/
