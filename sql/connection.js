const mysql = require('mysql')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: "database-2.cfekt2njspgn.us-east-1.rds.amazonaws.com",
        user: 'admin',
        password: 'Target!72',
        database: 'hello'
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;