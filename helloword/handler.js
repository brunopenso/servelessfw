'use strict';

module.exports.helloWorld = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work  
},
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!'
    }),
  };

  callback(null, response);
};

//event.httpMethod
//event.headers.<nameOfHeaders>
//event.path
//event.pathParameters.<name>
//event.queryStringParameters
module.exports.sum = (event, context, callback) => {
  var num1 = Number(event.pathParameters.num1);
  var num2 = Number(event.pathParameters.num2);

  var response = null;

  if (!num1 || !num2) {
    var result = "";
    if (!num1) {
      result = "Num1 is invalid"
    } else if (!num2){
      result = "Num2 is invalid"
    }
    response = {
      statusCode: 400,
      body: result
    }    
  } else {
    response = {
      statusCode: 200,
      body: JSON.stringify({result:num1+num2})
    }
  }
  callback (null, response);
};