//참고용 서비스
//데이터의 변화(추가, 수정, 삭제)시 서비스 이용
const {pool} = require("../../config/database");
const userDao = require("../dao/guideDao");
const baseResponse = require("../../config/baseResponseStatus");
const {response, errResponse} = require("../../config/response");

exports.updateUserName = async function (user_id, username) {
    try {
        const connection = await pool.getConnection(async (conn) => conn);

        const updateUserNameResult = await userDao.updateUserName(connection, user_id, username);
        console.log(updateUserNameResult);
        connection.release();
        const result = { user_id : user_id, newUserName : username }

        return response(baseResponse.SUCCESS, result);
    } catch (err) {
        console.log(`App - updateUserName Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
};