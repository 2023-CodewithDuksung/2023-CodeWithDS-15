//참고용 컨트롤러
const baseResponse = require("../../config/baseResponseStatus");
const {response, errResponse} = require("../../config/response");
const userService = require("../service/guideService");

exports.patchUserName = async function (req, res) {
    /*const username = req.user.username;
    const user_id = req.user.user_id;*/
    const {user_id, username} = req.body;

    if(username.length > 10) {
        return res.send(errResponse(baseResponse.USERNAME_LENGTH))
    } else {
        await userService.updateUserName(user_id, username);
        return res.send(response(baseResponse.SUCCESS, { username : username }));
    }
};