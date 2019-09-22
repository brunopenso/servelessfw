'use strict';

module.exports = async event => {
    return {
      statusCode: 200,
      body: JSON.stringify('PUT method')
    };
};