const mysql = require('mysql');

class MysqlConnector {
      connection(){
        const con = mysql.createConnection({
          host: "localhost",
          port:"3306",
          user: "admin",
          password:"admin",
          database:"app"
    });
    return con;
  }

}
  module.exports = MysqlConnector;