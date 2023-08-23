//수리요청
async function selectTitleRepair(connection) {
  const sql = `SELECT updateDate,title,state FROM repair`;
  const result = await connection.query(sql);
  return result;
}

async function selectRepair(connection, repair_id) {
  const sql = `SELECT * FROM repair WHERE repair_id=?`;
  const result = await connection.query(sql, repair_id);
  return result;
}

async function insertRepair(
  connection,
  repair_id,
  buildname,
  room,
  name,
  fixcontent,
  state,
  title
) {
  const sql = `INSERT INTO repair (repair_id,buildname,room,name,fixcontent,state,title,updateDate)VALUES ?`;
  const result = await connection.query(sql, [
    repair_id,
    buildname,
    room,
    name,
    fixcontent,
    state,
    title,
    updateDate,
  ]);
  return result;
}

async function deleteRepair(connection, repair_id) {
  const sql = `DELETE FROM repair WHERE repair_id=? `;
  const result = await connection.query(sql, repair_id);
  return result;
}
//공지사항
async function selectTitleNotice(connection) {
  const sql = `SELECT title FROM notice`;
  const result = await connection.query(sql);
  return result;
}

async function selectNotice(connection, notice_id) {
  const sql = `SELECT * FROM user WHERE notice_id=?`;
  const result = await connection.query(sql, notice_id);
  return result;
}
//외박신청
async function selectTitleApply(connection) {
  const sql = `SELECT startDate,endDate FROM apply`;
  const result = await connection.query(sql);
  return result;
}

async function selectApply(connection, apply_id) {
  const sql = `SELECT * FROM apply WHERE apply_id=?`;
  const result = await connection.query(sql, apply_id);
  return result;
}

async function insertApply(
  connection,
  apply_id,
  stuno,
  name,
  startDate,
  endDate,
  days,
  address,
  reason
) {
  const sql = `INSERT INTO apply(apply_id,stuno,name,startDate,endDate,days,address,reason) VALUES ?')`;
  const result = await connection.query(
    sql,
    apply_id,
    stuno,
    name,
    startDate,
    endDate,
    days,
    address,
    reason
  );
  return result;
}

async function deleteApply(connection, apply_id) {
  const sql = `DELETE FROM apply WHERE apply_id=? `;
  const result = await connection.query(sql, apply_id);
  return result;
}

module.exports = {
  selectTitleRepair,
  selectRepair,
  insertRepair,
  deleteRepair,
  selectTitleNotice,
  selectNotice,
  selectTitleApply,
  selectApply,
  insertApply,
  deleteApply,
};
