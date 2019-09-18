'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

let options = {};

// connect to local DB if running offline
if (process.env.IS_OFFLINE) {
  options = {
    endpoint: new AWS.Endpoint('http://localhost:8000'),
    accessKeyId: "accessKeyId",
    secretAccessKey: "secretAccessKey",
    region: "us-west-2",
  };
} else {
  throw new Error('Information for AWS not set');
}

const dynamoDB = new AWS.DynamoDB(options);

var todoTable = {
      TableName: "mytodolist",
      KeySchema: [
          {AttributeName: "id",KeyType: "HASH"}
      ],
      AttributeDefinitions: [
          {AttributeName: "id",AttributeType: "S"}
      ],
      ProvisionedThroughput: {
          ReadCapacityUnits: 1,
          WriteCapacityUnits: 1
      }
};

dynamoDB.createTable(todoTable, (err,data) => {
  if (err) {
    console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
  } else {
      console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
  }
});

module.exports = dynamoDB;