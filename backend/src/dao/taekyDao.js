//수리요청
async function selectRepairRecords(connection, userId) {
  const sql = `select date_format(created_at, '%y-%m-%d') as date, content, confirm, state from repair where userId = ? LIMIT 5;`;
  const result = await connection.query(sql, userId);
  return result;
}

async function selectRepairRecordDetail(connection, userId) {
  //방 주인이 요청하지 않았을수도 있으니 건물이름과 방 번호도 추가
  const sql = `select id, date_format(created_at, '%y-%m-%d') as date, building, room, content, confirm, state from repair where userId = ?;`;
  const result = await connection.query(sql, userId);
  return result;
}

async function insertRepair(connection, userId, building, room, content) {
  const sql = `INSERT INTO repair (userId, building, room, content) VALUES (?, ?, ?, ?);`;
  const result = await connection.query(sql, [userId, building, room, content]);
  return result;
}

async function insertApply(connection, postApplyParams) {
  const sql = `INSERT INTO stayout (userId, startDate, endDate, days, address, reason) VALUES (?, ?, ?, ?, ?, ?);`;
  const result = await connection.query(sql, postApplyParams);
  return result;
}

/*async function deleteRepair(connection, repair_id) {
  const sql = `DELETE FROM repair WHERE repair_id=? `;
  const result = await connection.query(sql, repair_id);
  return result;
}*/

async function updateRepairConfirm(connection, repairId) {
  const sql = `UPDATE repair SET confirm = "확인" WHERE id = ?;`;
  const result = await connection.query(sql, repairId);
  return result;
}

async function updateRepairState(connection, repairId) {
  const sql = `UPDATE repair SET state = "해결" WHERE id = ?;`;
  const result = await connection.query(sql, repairId);
  return result;
}
/*async function findRepairIdByUserId(connection, userId) {
  const sql = `SELECT id FROM repair WHERE userId = ?;`;
  const result = await connection.query(sql, userId);
  return result;
}

async function deleteRepair(connection, repairId) {
  const sql = `DELETE FROM repair WHERE id=?;`;
  const result = await connection.query(sql, repairId);
  return result;
}*/

//외박신청
/*async function selectTitleApply(connection) {
  const sql = `SELECT startDate,endDate FROM apply`;
  const result = await connection.query(sql);
  return result;
}*/

/*async function deleteApply(connection, apply_id) {
  const sql = `DELETE FROM apply WHERE apply_id=? `;
  const result = await connection.query(sql, apply_id);
  return result;
}*/

//커뮤니티(일상,장터) 글 저장
async function insertCommu(connection, title, topic, content, writerId) {
  const sql = `INSERT INTO post(title,topic,content, writerId) VALUES (?,?,?,?);`;
  const result = await connection.query(sql, [title, topic, content, writerId]);
  return result[0];
}

//커뮤니티 (일상,장터) 글 리스트 조회
async function selectCommu(connection, topic) {
  const sql = `SELECT title,content FROM post WHERE topic=?;`;
  const result = await connection.query(sql, topic);
  return result[0];
}
//커뮤니티 (일상,장터) 글 본문 조회
async function selectCommuContent(connection, topic, title) {
  const sql = `SELECT * FROM post WHERE topic=? and title=?;`;
  const result = await connection.query(sql, [topic, title]);
  return result[0];
}
//커뮤니티 배달팟 글 저장
async function insertDelivery(connection, title, description, eto, pplLimit, slot) {
  const sql = `INSERT INTO delivery (title, description, eto, pplLimit, slot) VALUES (?,?,?,?,?);`;
  const result = await connection.query(sql, [title, description, eto, pplLimit, slot]);
  return result[0];
}
//커뮤니티 배달팟 글 리스트 조회
async function selectDelivery(connection) {
  const sql = `SELECT * FROM delivery;`;
  const result = await connection.query(sql);
  return result[0];
}
//커뮤니티 배달팟 글 본문 조회
async function selectDeliveryContent(connection, title) {
  const sql = `SELECT * FROM delivery WHERE title=?;`;
  const result = await connection.query(sql, title);
  return result;
}
/*//커뮤니티 배달팟 currentPeople 수정
async function updateDelivery(connection, title, currentPeople) {
  const sql = `UPDATE delivery SET title=? WHERE currentPeople`;
  const result = await connection.query(sql, [title, currentPeople + 1]);
  return result;
}*/
//점호방송 조회
async function selectbroadcast(connection, date, building) {
  const sql = `SELECT content FROM broadcast WHERE date=? and building = ?`;
  const result = await connection.query(sql, [date, building]);
  return result;
}

module.exports = {
  selectRepairRecords,
  insertRepair,
  insertApply,
  selectRepairRecordDetail,
  updateRepairConfirm,
  updateRepairState,
  insertCommu,
  selectbroadcast,
  selectCommu,
  selectCommuContent,
  insertDelivery,
  selectDelivery,
  selectDeliveryContent,
  //updateDelivery,
};
