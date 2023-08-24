module.exports = function (app) {
  const use = require("../controller/taekyController");
  app.get("/repair", use.usegetTitleRepair);
  app.get("/repair-detail", use.usegetRepair);
  app.post("/repair", use.usepostRepair);
  app.delete("/repair/:id", use.usedelRepair);

  app.get("/notice", use.usegetTitleNotice);
  app.get("/repair/repair-detail", use.usegetNotice);

  app.get("/apply", use.usegetTitleApply);
  app.get("/apply/apply-detail", use.usegetApply);
  app.post("/apply", usepostApply);
  app.delete("/apply/:id", use.usedelApply);
};
