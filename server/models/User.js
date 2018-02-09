import db from '../utils/db';
function create(user){
  const sql = 'insert into user(username, password) values(?,?)';
  const values = [user.username, user.password];
  db.query(sql, values);
}
export default {
  create,
}