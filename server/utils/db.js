import mysql from 'mysql';

const pool = mysql.createPool({
  host:  '119.29.188.180',
  user:  'root',
  password:  'Aa13258495879!',
  database:  'blog'
});

const query = function(sql, values ) {
  return new Promise(( resolve, reject ) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        reject( err )
      } else {
        connection.query(sql, values, ( err, rows) => {

          if ( err ) {
            reject( err )
          } else {
            resolve( rows )
          }
          connection.release()
        })
      }
    })
  })
}

export default {
  query,
}