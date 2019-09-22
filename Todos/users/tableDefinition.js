var userTable = {
    TableName: "user",
    KeySchema: [
        {AttributeName: "mail",KeyType: "HASH"}
    ],
    AttributeDefinitions: [
        {AttributeName: "mail",AttributeType: "S"}
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
    }
};