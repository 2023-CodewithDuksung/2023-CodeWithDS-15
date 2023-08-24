const use = require("../controller/taekyController");
module.exports = function (app) {
  app.get("/repairs", use.getRepairRecords);
  app.get("/repair/detail", use.usegetRepairDetail);
  app.patch("/repair/confirm", use.patchRepairConfirm);
  app.patch("/repair/state", use.patchRepairState);
  app.post("/repair", use.usepostRepair);
  app.post("/stayout/apply", use.usepostApply);

  app.get("/commu", use.usegetCommu);
  app.get("/commu/detail", use.usegetCommuContent);
  app.post("/commu", use.usepostCommu);

  app.get("/delivery", use.usegetDelivery);
  app.get("/delivery/detail", use.usegetDeliveryContent);
  app.post("/delivery", use.usepostDelivery);
  //app.patch("/delivery/delivery-attend", use.);

  app.get("/broadcast", use.usegetBroadcast);
};
