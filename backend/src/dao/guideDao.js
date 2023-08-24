//참고용 dao
async function updateUserName(connection, user_id, username) {
  const findUserQuery = `UPDATE user SET username = ? WHERE id = ?;`;
  const weeklySumRow = await connection.query(findUserQuery, [
    username,
    user_id,
  ]);
  return weeklySumRow[0];
}

async function findUserBySnsId(connection, snsId, provider) {
  const findKakaoUserQuery = `SELECT id, username, provider FROM user WHERE snsId = ? and provider = ?;`;
  const kakaoUserRow = await connection.query(findKakaoUserQuery, [
    snsId,
    provider,
  ]);
  return kakaoUserRow[0];
}

module.exports = {
  updateUserName,
  findUserBySnsId,
};
