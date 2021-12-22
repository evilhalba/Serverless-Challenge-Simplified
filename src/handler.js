const SqlFunctions = require('./SqlFunctions');
module.exports.getEmployees = async event => {
  const functions = new SqlFunctions;
  const result = await functions.findAll();

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  }
};


module.exports.postEmployee = async event => {
  const obj = JSON.parse(event.body);
  const functions = new SqlFunctions;

  const result = await functions.save(obj.name,obj.age,obj.jobRole);

  

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };

  
};


module.exports.deleteEmployee = async event => {
  idEvent = event.rawPath;
  id = idEvent.substring(idEvent.indexOf("/")+1);
  const functions = new SqlFunctions;
  
  const result = await functions.findOne(id);

  if(result.length == false){
    return {statusCode:404,
    body:JSON.stringify({
      erorr:"Employee not found"
    })};
  };
  await functions.delete(id);

  return {statusCode:200};
};

module.exports.updateEmployee = async event => {
  const eventObj = JSON.parse(event.body)
  idEvent = event.rawPath;
  id = idEvent.substring(idEvent.indexOf("/")+1);
  const functions = new SqlFunctions;
  
  const result = await functions.findOne(id);

  if(result.length == false){
    return {statusCode:404,
    body:JSON.stringify({
      erorr:"Employee not found"
    })};
  };
  
  const retObj = await functions.update(id,eventObj.name, eventObj.age, eventObj.jobRole);

  return {statusCode:200,
  body:JSON.stringify(retObj)
  };
};