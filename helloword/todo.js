'use strict';

const uuid = require('uuid');
const dynamodb = require('./dynamodb');

module.exports.create = (event, context, callback) => {
  console.log('create method');
  const timestamp = new Date().getTime();
  const data = event.queryStringParameters.text;
  if (typeof data !== 'string') {
    console.error('Validation Failed');
    callback(null, {
      statusCode: 400,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Couldn\'t create the todo item.',
    });
    return;
  }

  const params = {
    TableName: 'mytodolist',
    Item: {
      id: ""+uuid.v1(),
      text: data,
      checked: false,
      createdAt: timestamp,
      updatedAt: timestamp,
    },
  };

  
  // write the todo to the database
  dynamodb.put(params, (error) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t create the todo item.',
      });
      return;
    }
    
    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(params.Item),
    };
    callback(null, response);
  });
};

module.exports.list = (event, context, callback) => {
  console.log('list method');

  var params = {
    TableName : "mytodolist"
  };

  dynamodb.scan(params, (err,data) => {
    if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        const response = {
          statusCode: 400,
          headers: {
            'Access-Control-Allow-Origin': '*', // Required for CORS support to work  
          },
          body: JSON.stringify(err, null, 2),
        };
      
        callback(null, response);
    } else {
        console.log("Query succeeded.");
  
        const response = {
          statusCode: 200,
          headers: {
            'Access-Control-Allow-Origin': '*', // Required for CORS support to work  
          },
          body: JSON.stringify(data.Items),
        };
      
        callback(null, response);
    }
  })
};