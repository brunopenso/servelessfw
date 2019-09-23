'use strict';

const isString = (obj => typeof obj === 'string' || obj instanceof String);
const isNumber = (obj => typeof obj === 'number' || obj instanceof Number);

module.exports = {
    isString: isString,
    isNumber: isNumber
}