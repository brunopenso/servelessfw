'use strict';

const Util = require('../../Util/Util');
const Validator = require('../../Util/SchemaValidator');


module.exports = async event => {
  //console.log(typeof event.body)
  var params = Util.isString(event.body) ? JSON.parse(event.body) : event.body;  
  //validate event.body against schema

  if (!params.mail || params.mail === "") {
    return {
      statusCode: 400,
      body: JSON.stringify({"error":"Invalid mail"})
    };
  } else if (!params.mail.includes('@')){
    return {
      statusCode: 400,
      body: JSON.stringify({"error":"Invalid mail"})
    };
  }

  //check if the email exists

  //create DB structure
  const dbInfo = {
    "mail": params.mail,
    "name": params.name,
    "birthDate": params.birthDate
  };

  //save the result

  //return
  return {
    statusCode: 201
  };
};