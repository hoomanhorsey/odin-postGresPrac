const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function searchUsernames(searchTerm) {
  const cleanSearchTerm = `%${searchTerm}%`;
  const { rows } = await pool.query(
    "SELECT * FROM usernames WHERE username ILIKE $1",
    [cleanSearchTerm]
  );
  return rows;
}

async function deleteAllUsers() {
  console.log("you really want me to delete everything");

  await pool.query("DELETE FROM usernames");
  // const { rows } = await pool.query(
  //   "SELECT * FROM usernames WHERE username ILIKE $1",
  //   [cleanSearchTerm]
}
module.exports = {
  getAllUsernames,
  insertUsername,
  searchUsernames,
  deleteAllUsers,
};
