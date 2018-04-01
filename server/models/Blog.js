import db from '../utils/db';
async function getBlogs() {
  const sql = 'select * from blog';
  const result = await db.query(sql);
  return result;
}
export default {
  getBlogs
}