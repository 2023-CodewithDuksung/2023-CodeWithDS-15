//참고용 provider
//이미 있는 데이터를 조회할 때 사용
const { pool } = require("../../config/database");
const userDao = require("../dao/userDao");

exports.getUserBySnsId = async function (snsId, provider) {

    const connection = await pool.getConnection(async (conn) => conn);
    const findUserResult = await userDao.findUserBySnsId(connection, snsId, provider);
    connection.release();

    return findUserResult[0];
};
