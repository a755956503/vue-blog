import db from '../utils/db';
async function getBlogs() {
  const sql = 'select * from blog';
  const result = await db.query(sql);
  return result;
}
async function addArticle(article) {
  const sql = 'insert into blog set ?';
  const result = await db.query(sql, article);
  return result;
}
export default {
  getBlogs,
  addArticle
}