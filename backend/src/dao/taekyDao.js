//수리요청
async function selectRepairRecords(connection, userId) {
  const sql = `select date_format(created_at, '%y-%m-%d') as date, content, confirm, state from repair where userId = ? LIMIT 5;`;
  const result = await connection.query(sql, userId);
  return result;
}

async function selectRepairRecordDetail(connection, userId) { //방 주인이 요청하지 않았을수도 있으니 건물이름과 방 번호도 추가
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
}

async function selectApply(connection, apply_id) {
  const sql = `SELECT * FROM apply WHERE apply_id=?`;
  const result = await connection.query(sql, apply_id);
  return result;
}*/

/*async function deleteApply(connection, apply_id) {
  const sql = `DELETE FROM apply WHERE apply_id=? `;
  const result = await connection.query(sql, apply_id);
  return result;
}*/

module.exports = {
  selectRepairRecords,
  insertRepair,
  insertApply,
  selectRepairRecordDetail,
  updateRepairConfirm,
  updateRepairState
};
