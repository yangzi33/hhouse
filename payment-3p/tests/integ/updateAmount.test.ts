const AWS = require('aws-sdk');
const axios = require('axios');
import { v4 as uuidv4 } from 'uuid';
const env = process.env.ENVIRONMENT || "dev";

test('updateAmount with the same amount', async () => {
    const ssm = new AWS.SSM();
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const apiUrl = (await ssm.getParameter({
        Name: "/ecommerce/"+env+"/payment-3p/api/url"
    }).promise()).Parameter.Value;
    const tableName = (await ssm.getParameter({
        Name: "/ecommerce/"+env+"/payment-3p/table/name"
    }).promise()).Parameter.Value;

    const item = {
        paymentToken: uuidv4(),
        amount: 3000
    };

    await dynamodb.put({
        TableName: tableName,
        Item: item
    }).promise();

    const response = await axios.post(apiUrl+"/updateAmount", item);

    expect(response.status).toBe(200);
    expect(typeof response.data.ok).toBe("boolean");
    expect(response.data.ok).toBe(true);

    const ddbResponse = await dynamodb.get({
        TableName: tableName,
        Key: { paymentToken: item.paymentToken }
    }).promise();
    expect(ddbResponse.Item.amount).toBe(item.amount);

    await dynamodb.delete({
        TableName: tableName,
        Key: { paymentToken: item.paymentToken }
    }).promise();
});

test('updateAmount with smaller amount', async () => {
    const ssm = new AWS.SSM();
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const apiUrl = (await ssm.getParameter({
        Name: "/ecommerce/"+env+"/payment-3p/api/url"
    }).promise()).Parameter.Value;
    const tableName = (await ssm.getParameter({
        Name: "/ecommerce/"+env+"/payment-3p/table/name"
    }).promise()).Parameter.Value;

    const item = {
        paymentToken: uuidv4(),
        amount: 3000
    };

    await dynamodb.put({
        TableName: tableName,
        Item: item
    }).promise();

    const response = await axios.post(apiUrl+"/updateAmount", {
        paymentToken: item.paymentToken,
        amount: item.amount-1000
    });

    expect(response.status).toBe(200);
    expect(typeof response.data.ok).toBe("boolean");
    expect(response.data.ok).toBe(true);

    const ddbResponse = await dynamodb.get({
        TableName: tableName,
        Key: { paymentToken: item.paymentToken }
    }).promise();
    expect(ddbResponse.Item.amount).toBe(item.amount-1000);

    await dynamodb.delete({
        TableName: tableName,
        Key: { paymentToken: item.paymentToken }
    }).promise();
});

test('updateAmount with larger amount', async () => {
    const ssm = new AWS.SSM();
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const apiUrl = (await ssm.getParameter({
        Name: "/ecommerce/"+env+"/payment-3p/api/url"
    }).promise()).Parameter.Value;
    const tableName = (await ssm.getParameter({
        Name: "/ecommerce/"+env+"/payment-3p/table/name"
    }).promise()).Parameter.Value;

    const item = {
        paymentToken: uuidv4(),
        amount: 3000
    };

    await dynamodb.put({
        TableName: tableName,
        Item: item
    }).promise();

    const response = await axios.post(apiUrl+"/updateAmount", {
        paymentToken: item.paymentToken,
        amount: item.amount + 2000
    });

    expect(response.status).toBe(200);
    expect(typeof response.data.ok).toBe("boolean");
    expect(response.data.ok).toBe(false);

    const ddbResponse = await dynamodb.get({
        TableName: tableName,
        Key: { paymentToken: item.paymentToken }
    }).promise();
    expect(ddbResponse.Item.amount).toBe(item.amount);

    await dynamodb.delete({
        TableName: tableName,
        Key: { paymentToken: item.paymentToken }
    }).promise();
});

test('updateAmount without paymentToken', async () => {
    const ssm = new AWS.SSM();
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const apiUrl = (await ssm.getParameter({
        Name: "/ecommerce/"+env+"/payment-3p/api/url"
    }).promise()).Parameter.Value;
    const tableName = (await ssm.getParameter({
        Name: "/ecommerce/"+env+"/payment-3p/table/name"
    }).promise()).Parameter.Value;

    const item = {
        paymentToken: uuidv4(),
        amount: 3000
    };

    await axios.post(apiUrl+"/updateAmount", {
        amount: item.amount
    }).then((response: any) => {
        expect(response).toBe(undefined);
    }, (error : any) => {
        expect(error.response.status).toBe(400);
        expect(typeof error.response.data.message).toBe("string");
        expect(error.response.data.message).toContain("paymentToken");
    });
});

test('updateAmount without amount', async () => {
    const ssm = new AWS.SSM();
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const apiUrl = (await ssm.getParameter({
        Name: "/ecommerce/"+env+"/payment-3p/api/url"
    }).promise()).Parameter.Value;
    const tableName = (await ssm.getParameter({
        Name: "/ecommerce/"+env+"/payment-3p/table/name"
    }).promise()).Parameter.Value;

    const item = {
        paymentToken: uuidv4(),
        amount: 3000
    };

    await axios.post(apiUrl+"/updateAmount", {
        paymentToken: item.paymentToken
    }).then((response: any) => {
        expect(response).toBe(undefined);
    }, (error : any) => {
        expect(error.response.status).toBe(400);
        expect(typeof error.response.data.message).toBe("string");
        expect(error.response.data.message).toContain("amount");
    });
});