'use strict';

module.exports.create = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work  
    },
    body: JSON.stringify({
      message: 'Create todo method'
    }),
  };

  callback(null, response);
};

module.exports.list = (event, context, callback) => {
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Required for CORS support to work  
      },
      body: JSON.stringify({
        message: 'Create list method'
      }),
    };
  
    callback(null, response);
  };