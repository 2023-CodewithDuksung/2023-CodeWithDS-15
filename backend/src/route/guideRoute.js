//참고용 라우트
module.exports = function (app) {
  const user = require("../controller/guideController");
  //app.get(), app.post() ...

  app.patch("/user", user.patchUserName);
};
