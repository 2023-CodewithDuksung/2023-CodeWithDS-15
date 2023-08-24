const express = require("express");
const compression = require("compression");
const methodOverride = require("method-override");
var cors = require("cors");

module.exports = function () {
  const app = express();

  app.use(compression());

  app.use(express.json());

  app.use(express.urlencoded({ extended: true }));

  app.use(methodOverride());

  app.use(cors());

  app.get("/", () => {
    try{
      console.log("루트 페이지로 접속하셨습니다.");
    } catch (e) {
      console.log(e);
    }
  });

  require('../src/route/jaydeRoute')(app);
  require('../src/route/taekyRoute')(app);

  return app;
};
