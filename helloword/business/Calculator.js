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
    const n1 = Number(v1);
    const n2 = Number(v2);
  
    if (!n1 || !n2) {
        throw new Error("Parameters p1 and p2 must be number");
    }

    return n1/n2;
}