'use strict';
//    Validator of json inputs
//https://github.com/serverless-projects/serverless-unit-test/blob/master/Utils.js
//
const Calculator = require('./business/Calculator');

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

module.exports.sum = (event, context, callback) => {
  try {
    const value = Calculator.MethodSum(
      event.pathParameters.num1,
      event.pathParameters.num2);

    var response = {
      statusCode: 200,
      body: JSON.stringify({result: value})
    }
    callback (null, response);
  } catch (error) {
    var response = {
      statusCode: 400,
      body: JSON.stringify(error.toString())
    }
    callback (null, response);
  }
};

module.exports.divide = (event, context, callback) => {

  if (!event.queryStringParameters) {
    const response = {
      statusCode: 400,
      body: JSON.stringify({result: "Query string parameters not found"})
    }
    callback (null, response);
    return;    
  }

  if (!event.queryStringParameters.p1 ||
    !event.queryStringParameters.p2) {
      const response = {
        statusCode: 400,
        body: JSON.stringify({result: "Parameters p1 and p2 must be informed"})
      }
      callback (null, response);
      return;    
  }
  const n1 = Number(event.queryStringParameters.p1);
  const n2 = Number(event.queryStringParameters.p2);

  if (!n1 || !n2) {
    const response = {
      statusCode: 400,
      body: JSON.stringify({result: "Parameters p1 and p2 must be number"})
    }
    callback (null, response);
    return;    
  }

  var response = {
    statusCode: 200,
    body: JSON.stringify({result: n1/n2})
  }
  callback (null, response);
};
//event.httpMethod
//event.headers.<nameOfHeaders>
//event.path
//event.pathParameters.<name>
//event.queryStringParameters
module.exports.calculator = (event, context, callback) => {
  if (event.resource === "/calc/divide") {
    callback(null, this.divide(event, context, callback));
  } else if (event.resource === "/calc/sum/{num1}/{num2}") {
    callback(null, this.sum(event, context, callback));
  } else {
    var response = {
      statusCode: 200,
      body: JSON.stringify({event
      })
    };

    callback(null, response);
  }
}