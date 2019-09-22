'use strict';
const isString = (obj => typeof obj === 'string' || obj instanceof String)

module.exports = async event => {
  //console.log(typeof event.body)
  var params = isString(event.body) ? JSON.parse(event.body) : event.body;
  //console.log(params);

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