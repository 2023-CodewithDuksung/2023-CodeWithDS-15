const use = require("../controller/taekyController");
module.exports = function (app) {
    app.get("/repairs", use.getRepairRecords);
    app.get("/repair/detail", use.usegetRepairDetail);
    app.patch("/repair/confirm", use.patchRepairConfirm);
    app.patch("/repair/state", use.patchRepairState);
    app.post("/repair", use.usepostRepair);
    app.post("/stayout/apply", use.usepostApply);

    /*app.get("/apply", use.usegetTitleApply);
    app.get("/apply/apply-detail", use.usegetApply);
    app.delete("/repair", use.usedelRepair);
    app.delete("/apply/:id", use.usedelApply);*/
};
