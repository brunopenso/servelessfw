var Validator = require('jsonschema');
var fs = require('fs');

class ValidationUtils {
    
    constructor() {
        this.v = new Validator.Validator();;
    }
    setup() {
        console.log(this.v);
        fs.readFile("./functions/users/schema.json", "utf8", function (err, data) {
            if (err) throw err;
            var content = data.toString();
            setup1(content);
        });
        /*fs.readFile("./functions/todos/schema.json", "utf8", function (err, data) {
            if (err) throw err;
            console.log(data.toString());
            console.log(JSON.parse(data.toString()).$id);
            this.v.addSchema(schema, JSON.parse(schema).$id);
        });*/
    }
    setup1 = (content) => {
        console.log(content);
        //this.v.addSchema(content, JSON.parse(content).$id);
    }
    validate(object, type) {
        let schema = this.v.schemas[type];

        return new Promise((resolve, reject) => {
            var validation = this.v.validate(object, schema);
            if (validation.errors.length > 0) {
                console.log(validation);
                reject(validation.errors)
            } else {
                resolve();
            }
        });
    }
}

module.exports = ValidationUtils;