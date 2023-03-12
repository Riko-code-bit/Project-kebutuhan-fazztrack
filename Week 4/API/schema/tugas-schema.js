 const getIdSchema1 = {
    "type": "object",
    "required": [
        "id",
        "firstName",
        "lastName",
        "age",
        "occupation",
        "nationality",
        "hobbies",
        "gender",
        "createdDate",
        "updatedDate"
    ],
    "additionalProperties": false,
    "properties": {
        "id": {
            "type": "[integer, null]"
        },
        "firstName": {
            "type": "string"
        },
        "lastName": {
            "type": "string"
        },
        "age": {
            "type": "integer"
        },
        "occupation": {
            "type": "string"
        },
        "nationality": {
            "type": "string"
        },
        "hobbies": {
            "type": "integer",
            "additionalItems": false,
            "items": {
                "type": "string"
            }
        },
        "gender": {
            "type": "string"
        },
        "createdDate": {
            "type": "string"
        },
        "updatedDate": {
            "type": "string"
        }
    }
};

 module.exports = {getIdSchema1};