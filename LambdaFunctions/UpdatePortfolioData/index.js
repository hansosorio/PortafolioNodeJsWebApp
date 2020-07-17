'use strict'
const AWS = require('aws-sdk');

AWS.config.update({ region: "us-east-1"});

exports.handler = async (event, context, callback) => {
  const documentClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-1"});

  let responseBody = "";
  let statusCode = 0;

  let {idportfolio, description, image_url, username, user_twitter} = event;
  
  if (username == undefined) {
    ({idportfolio, description, image_url, username, user_twitter} = JSON.parse(event.body));
  }

  const params = {
    TableName: "Portfolio",
    Key: {
      "idportfolio": idportfolio,
    },
    UpdateExpression: "set username = :n, description = :d, image_url = :iu, user_twitter = :ut ",
    ExpressionAttributeValues: {
      ":n": username,
      ":d": description,
      ":iu": image_url,
      ":ut": user_twitter
    },
    ReturnValues: "UPDATED_NEW"
  }

  try {
    const data = await documentClient.update(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 201;
  } catch (err) {
    responseBody = `Unable to put portfolio: ${err}`;
    statusCode = 403;
  }
  
  const response = {
    statusCode: statusCode,
    headers: {
      "Content-Type": "application/json"
    },
    body: responseBody
  };

  return response;
}