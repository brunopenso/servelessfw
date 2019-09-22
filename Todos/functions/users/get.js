'use strict';

module.exports = async event => {
  
    return {
      statusCode: 200,
      body: JSON.stringify('GET method for id > ' + event.pathParameters.id)
    };
};