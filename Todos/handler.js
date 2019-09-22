'use strict';

const userGet = require('./users/get');
const userPut = require('./users/put');
const userPost = require('./users/post');

const todoGet = require('./todos/get');
const todoDelete = require('./todos/delete');
const todoPost = require('./todos/post');

module.exports.users = async event => {
  if (event.httpMethod === "GET") {
    return await userGet(event);
  } else if (event.httpMethod === "POST") {
    return await userPost(event);
  } else if (event.httpMethod === "PUT") {
    return await userPut(event);
  } else {
    return {
      statusCode: 405,
      body: "Invalid internal route"
    };
  }
};

module.exports.todos = async event => {
  if (event.httpMethod === "GET") {
    return await todoGet(event);
  } else if (event.httpMethod === "POST") {
    return await todoPost(event);
  } else if (event.httpMethod === "DELETE") {
    return await todoDelete(event);
  } else {
    return {
      statusCode: 405,
      body: "Invalid internal route"
    };
  }
};