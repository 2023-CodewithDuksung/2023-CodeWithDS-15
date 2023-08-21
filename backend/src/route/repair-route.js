app.use(express.json()); //req.body 사용시 JSON 미들웨어 사용
app.use(express.urlencoded({ extended: true }));
/* POST 요청 시 컨텐트 타입이 application/x-www-form-urlenceded인 경우 파싱
대부분이 이 타입 : 키=값&키=값 조합 형태의 데이터*/

const repairService = require(); //()안 서비스 파일 로딩

app.get("/repair", async (_, res) => {
  res.render("repair", { title: "수리 요청" }); //여기서의 repair는 handlebars(UI)의 이름
});
app.post("/repair-content/:id", async (_, res) => {
  res.render("repair-content", { title: "수리 요청 게시판" });
});

app.post("/repair", async (req, res) => {
  const post = req.body;
  const result = await repairService.writeRepair(collection, post);
  res.redirect(`/repair-content/${result.insertedId}`);
});
