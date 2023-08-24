const { pool } = require("../../config/database");
const jaydeDao = require("../dao/jaydeDao");

exports.getCleaningData = async function (userId, start, end) { //청소 스케쥴 조회
    const connection = await pool.getConnection(async (conn) => conn);
    const findUser = await jaydeDao.findUserById(connection, userId);
    const findScheduleResult = await jaydeDao.findWeeklyCleaningSchedule(connection, userId, start, end);
    console.log(findScheduleResult);
    const findRecordsResult = await jaydeDao.findCleaningRecordByIdL4(connection, userId);
    const result = {
        username: findUser[0].name,
        cleaningSchedule: findScheduleResult,
        cleaningRecords: findRecordsResult
    };
    connection.release();

    return result;
};

exports.getCleaningRecords = async function (userId) {
    const connection = await pool.getConnection(async (conn) => conn);

    const findRecordsResult = await jaydeDao.findCleaningRecordById(connection, userId);
    connection.release();

    return findRecordsResult;
}

exports.findUnitMemberName = async function (userId) { //유닛 멤버 이름 조회
    const connection = await pool.getConnection(async (conn) => conn);
    const findUnitId = await jaydeDao.findUnitIdByUserId(connection, userId);

    const findUnitMemberName = await jaydeDao.findUnitMemberByUnitId(connection, findUnitId[0].unitId);

    connection.release();

    return findUnitMemberName;
};

exports.findUnitMemberSche = async function (memberName) { //대타를 요청하려니는 멤버의 청소 스케쥴 조회
    const connection = await pool.getConnection(async (conn) => conn);
    const memberId = await jaydeDao.findUnitMemberIdByName(connection, memberName);
    const findRecordsResult = await jaydeDao.findCleaningRecordByName(connection, memberId[0].memberId);

    connection.release();

    return findRecordsResult;
};

exports.test = async function () { //유닛 멤버 이름 조회
    const connection = await pool.getConnection(async (conn) => conn);
    const test = await jaydeDao.test(connection);

    connection.release();

    return test[0];
};