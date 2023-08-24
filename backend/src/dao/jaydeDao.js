async function findWeeklyCleaningSchedule(connection, userId, start, end) { //이번주 청소 일정
    const findCleaningScheQuery = `SELECT date_format(date, '%y-%m-%d') as date from cleaningRecord WHERE userId = ? and date between ? and ?;`;
    const cleaningScheRow = await connection.query(findCleaningScheQuery, [userId, start, end]);
    return cleaningScheRow[0];
}
async function findCleaningRecordByIdL4(connection, userId) { //4개 제한 뷰용
    const findCleaningRecordQuery = `SELECT id, date_format(date, '%y-%m-%d') as date, complete, confirm from cleaningRecord WHERE userId = ? LIMIT 4;`;
    const cleaningRecordRow = await connection.query(findCleaningRecordQuery, userId);
    return cleaningRecordRow[0];
}
async function findCleaningRecordById(connection, userId) {//제한 없음
    const findCleaningRecordQuery = `SELECT id, date_format(date, '%y-%m-%d') as date, complete, confirm from cleaningRecord WHERE userId = ?;`;
    const cleaningRecordRow = await connection.query(findCleaningRecordQuery, userId);
    return cleaningRecordRow[0];
}

async function findCleaningRecordByName(connection, memberName) {
    const findCleaningRecordQuery = `SELECT id, date_format(date, '%y-%m-%d') as date, complete, confirm from cleaningRecord WHERE userId = ?;`;
    const cleaningRecordRow = await connection.query(findCleaningRecordQuery, memberName);
    return cleaningRecordRow[0];
}
async function findUserById(connection, userId) {
    const findUserQuery = `SELECT * from student WHERE id = ?;`;
    const userRow = await connection.query(findUserQuery, userId);
    return userRow[0];
}

async function updateCleaningRecordComplete(connection, userId, date) {
    const updateCompleteQuery = `UPDATE cleaningRecord SET complete = '청소 완료' WHERE userId = ? and date = ?;`;
    const recordRow = await connection.query(updateCompleteQuery, [userId, date]);
    return recordRow[0];
}

async function updateCleaningRecordConfirm(connection, userId, date) {
    const updateConfirmQuery = `UPDATE cleaningRecord SET confirm = '확인' WHERE userId = ? and date = ?;`;
    const recordRow = await connection.query(updateConfirmQuery, [userId, date]);
    return recordRow[0];
}

async function findUnitIdByUserId(connection, userId) {
    const updateConfirmQuery = `SELECT unitId FROM unitMember WHERE memberId = ?;`;
    const recordRow = await connection.query(updateConfirmQuery, userId);
    return recordRow[0];
}

async function findUnitMemberByUnitId(connection, unitId) { //유닛 id -> 이름
    const updateConfirmQuery = `SELECT memberName FROM unitMember WHERE unitId = ?;`;
    const recordRow = await connection.query(updateConfirmQuery, unitId);
    return recordRow[0];
}

async function findUnitMemberIdByName(connection, memberName) {//이름 -> 유저 id
    const findUnitMemberIdQuery = `SELECT memberId FROM unitMember WHERE memberName = ?;`;
    const findMemberReulst = await connection.query(findUnitMemberIdQuery, memberName);
    return findMemberReulst[0];
}

async function insertChangeReq(connection, insertChangeReqParams) {
    const findUnitMemberIdQuery = `INSERT INTO changecleaning (requesterId, substitueId, requestDate, reason) VALUES (?, ?, ?, ?);`;
    const findMemberReulst = await connection.query(findUnitMemberIdQuery, insertChangeReqParams);
    return findMemberReulst[0];
}

async function findChangeReqId(connection, userId, today) {
    const findUChangeReqIdQuery = `SELECT id FROM changecleaning WHERE requesterId = ? and requestDate = ?;`;
    const findMemberReulst = await connection.query(findUChangeReqIdQuery, [userId, today]);
    return findMemberReulst[0];
}

async function updateCDateChangeReq(connection, changeReqId, changeDate) {
    const findUnitMemberIdQuery = `UPDATE changecleaning SET changeDate = ? WHERE id = ;`;
    const findMemberReulst = await connection.query(findUnitMemberIdQuery, [changeDate, changeReqId]);
    return findMemberReulst[0];
}

async function insertChangeDay(connection, changeReqId, changeDate) {
    const findUnitMemberIdQuery = `INSERT INTO changereqday (changeId, date) VALUES (?, ?);`;
    const findMemberReulst = await connection.query(findUnitMemberIdQuery, [changeReqId, changeDate]);
    return findMemberReulst[0];
}
async function test(connection) {//db test
    const testQuery = `SELECT * FROM student;`;
    const testReulst = await connection.query(testQuery);
    return testReulst;
}

module.exports = {
    findWeeklyCleaningSchedule,
    findCleaningRecordByIdL4,
    findCleaningRecordById,
    findCleaningRecordByName,
    findUserById,
    updateCleaningRecordComplete,
    updateCleaningRecordConfirm,
    findUnitIdByUserId,
    findUnitMemberByUnitId,
    findUnitMemberIdByName,
    insertChangeReq,
    updateCDateChangeReq,
    findChangeReqId,
    insertChangeDay,
    test
};