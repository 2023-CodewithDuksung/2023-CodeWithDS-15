const jayde = require("../controller/jaydeController");
module.exports = function (app) {
    //app.get(), app.post() ...

    app.get('/menu', jayde.getMenu);

    app.get('/unit', jayde.getCleaningData);

    app.get('/unit/cleaningRecords', jayde.getCleaningRecords);

    app.patch('/unit/cleaningComplete', jayde.patchCleaningComplete);

    app.patch('/unit/cleaningConfirm', jayde.patchCleaningConfirm);

    app.get('/unit/changeCleaning', jayde.getUnitMemberName); //유닛탭 누르면 유닛 멤버 이름 전달하는 라우트

    app.get('/unit/changeCleaning/memberSche', jayde.getMemberSche);

    app.post('/unit/requestChange', jayde.postChangeReq);

    app.get('/apitest', jayde.test);

}