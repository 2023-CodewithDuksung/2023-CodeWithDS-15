module.exports = {

    // Success
    SUCCESS : { "isSuccess": true, "code": 200, "message":"성공" },

    //Request error
    USER_NOT_LOGGED_IN : { "isSuccess": false, "code": 403, "message": "로그인 필요"},
    USER_IS_LOGGED_IN : { "isSuccess": false, "code": 403, "message": "로그인 된 상태입니다."},
    USER_UNAUTHORIZED : { "isSuccess": false, "code": 401, "message": "인증되지 않았습니다."},
    USERNAME_LENGTH : { "isSuccess": false, "code": 400, "message": "이름은 10자 이내로 설정해주세요."},
    TABLE_NOT_EXIST : { "isSuccess": false, "code": 404, "message": "해당 테이블이 존재하지 않습니다."},
    // Response error

    //Connection, Transaction 등의 서버 오류
    DB_ERROR : { "isSuccess": false, "code": 500, "message": "데이터 베이스 에러"},
    SERVER_ERROR : { "isSuccess": false, "code": 500, "message": "서버 에러"},
    SESSION_ERROR : { "isSuccess": false, "code": 500, "message": "세션 에러"}
}
