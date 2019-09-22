'use strict';

const userGet = require('./users/get');
const userPut = require('./users/put');
const userPost = require('./users/post');

const todoGet = require('./todos/get');
const todoDelete = require('./todos/delete');
const todoPost = require('./todos/post');

module.exports.users = async event => {
  if (event.httpMethod === "GET") {
    return userGet(event);
  } else if (event.httpMethod === "POST") {
    return userPost(event);
  } else if (event.httpMethod === "PUT") {
    return userPut(event);
  } else {
    return {
      statusCode: 405,
      body: "Invalid internal route"
    };
  }
};

module.exports.todos = async event => {
  if (event.httpMethod === "GET") {
    return todoGet(event);
  } else if (event.httpMethod === "POST") {
    return todoPost(event);
  } else if (event.httpMethod === "DELETE") {
    return todoDelete(event);
  } else {
    return {
      statusCode: 405,
      body: "Invalid internal route"
    };
  }
};