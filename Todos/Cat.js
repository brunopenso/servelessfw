
var fs = require('fs');
var Validator = require('jsonschema');
class Cat {
    constructor() {
        this.v = new Validator.Validator();
        fs.readFile("./functions/users/schema.json", "utf8", function (err, data) {
            if (err) throw err;
            console.log(data.toString());
        });
    }
    makeSound() {
        return `${this.constructor.name}: Meowww`;
    }
}

// exports = Cat; // It will not work with `new Cat();`
// exports.Cat = Cat; // It will require `new Cat.Cat();` to work (yuck!)
module.exports = Cat;