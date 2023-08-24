const { pool } = require("../../config/database");
const jaydeDao = require("../dao/jaydeDao");
const baseResponse = require("../../config/baseResponseStatus");
const { response, errResponse } = require("../../config/response");
const moment = require("moment-timezone");

exports.updateCleaningComplete = async function (userId, date) {
    try {
        const connection = await pool.getConnection(async (conn) => conn);

        const updateCleaningCompleteResult = await jaydeDao.updateCleaningRecordComplete(connection, userId, date);
        console.log(updateCleaningCompleteResult);
        connection.release();

        return response(baseResponse.SUCCESS);
    } catch (err) {
        console.log(`App - updateCleaningComplete Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
}

exports.updateCleaningConfirm = async function (userId, date) {
    try {
        const connection = await pool.getConnection(async (conn) => conn);

        const updateCleaningConfirmResult = await jaydeDao.updateCleaningRecordConfirm(connection, userId, date);
        console.log(updateCleaningConfirmResult);
        connection.release();

        return response(baseResponse.SUCCESS);
    } catch (err) {
        console.log(`App - updateCleaningConfirm Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
}

exports.insertChangeReq = async function (userId, substitueMem, date, changeDateList, reason) {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        //대타 요청할 사람의 Id 찾기
        const substitueId = await jaydeDao.findUnitMemberIdByName(connection, substitueMem);
        console.log(substitueId[0]);

        const insertChangeReqParams = [userId, substitueId[0].memberId, date, reason];
        const insertChangeReqResult = await jaydeDao.insertChangeReq(connection, insertChangeReqParams);
        console.log(insertChangeReqResult);

        const changeReqId = await jaydeDao.findChangeReqId(connection, userId, date);
        console.log(changeReqId);
        //바꿔줄 수 있는 날짜 수에 따라 다르게 동작
        if(changeDateList.length == 1) {
            const updateCDateChangeReq = await jaydeDao.updateCDateChangeReq(connection, changeReqId[0].id, changeDateList[0].date); //CDate = ChangeDate = 바꿔줄 수 있다고 한 날짜
            console.log(updateCDateChangeReq);
            connection.release();

        } else if( changeDateList.length > 1 ) {
            for(const item of changeDateList) {
                const insertChangeReqDay = await jaydeDao.insertChangeDay(connection, changeReqId[0].id, item.date);
                console.log(insertChangeReqDay);
            }
            connection.release();
        }
        return response(baseResponse.SUCCESS);


    } catch (err) {
        console.log(err);
        return errResponse(baseResponse.DB_ERROR);
    }
}
