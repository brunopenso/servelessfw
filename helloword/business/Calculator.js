'use strict';

module.exports.MethodSum = (v1,v2) => {
    var num1 = Number(v1);
    var num2 = Number(v2);

    if (!num1 || !num2) {
        throw new Error("Invalid Number");
    } else {
      return num1 + num2;
    }
}

module.exports.MethodDivide = (v1,v2) => {
    return v1/v2;
}