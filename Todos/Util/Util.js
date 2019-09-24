'use strict';

const isString = (obj => typeof obj === 'string' || obj instanceof String);
const isNumber = (obj => typeof obj === 'number' || obj instanceof Number);
const isMail = (obj 
    => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(obj).toLowerCase());
        }
    );

module.exports = {
    isString: isString,
    isNumber: isNumber,
    isMail: isMail
}