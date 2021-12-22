const MysqlConnector = require('./MysqlConnector');

class SqlFunctions {
  constructor(){
    const connector = new MysqlConnector();
    this.connection = connector.connection();
  }

  async findAll(){
    const p = new Promise((resolve) => {
      this.connection.query("SELECT * FROM employees", function(err, results) {
        resolve(results);
      });
    });
    const result = await p;

    return result;
  }
  async findOne(id){
    const p = new Promise((resolve) => {
      this.connection.query("SELECT * FROM employees WHERE id="+id+";", function(err, results) {
        resolve(results);
      });
    });
    const result = await p;

    return result;
  }

  async save(name, age, jobRole){
    const p = new Promise((resolve)=> {
      this.connection.query("INSERT INTO employees(age,name,jobRole) VALUES ("+age+",'"+name+"','"+jobRole+"');", function(err, results) {
        resolve(results);
      });
    });
    const result = await p;

    return result;
  }
  async delete(id){
    const p = new Promise((resolve) => {
      this.connection.query("DELETE FROM employees WHERE id="+id+";", function(err, results) {
        resolve(results);
      });
    });
    const result = await p;

    return result;
  }
  async update(id, name, age, jobRole){
    const p = new Promise((resolve)=> {
      this.connection.query("UPDATE employees SET age ="+age+" ,name ='"+name+"',jobRole='"+jobRole+"' WHERE id="+id+";", function(err, results) {
        resolve(results);
      });
    });
    const result = await p;

    return result;
  }

}
module.exports = SqlFunctions;