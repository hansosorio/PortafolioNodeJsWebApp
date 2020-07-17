'use strict'
const AWS = require('aws-sdk');

AWS.config.update({ region: "us-east-1"});

exports.handler = async (event, context, callback) => {
  const documentClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-1"});

  let responseBody = "";
  let statusCode = 0;

  let {idportfolio, description, image_url, username, user_twitter} = event;
  
  if (description == undefined) {
    ({idportfolio, description, image_url, username, user_twitter} = JSON.parse(event.body));
  }
  
  if ( description == undefined ||
      image_url == undefined ||
      username == undefined ||
      user_twitter == undefined) {
    const response = {
      statusCode: 403,
      headers: {
        "Content-Type": "application/json"
      },
      body: `Unable to put portfolio because missing parameters.`
    };
  
    return response;
  }

  const params = {
    TableName: "Portfolio",
    Item: {
      idportfolio,
      description,
      created_on: new Date().toString(),
      image_url: image_url,
      username,
      user_twitter
    }
  }

  try {
    const data = await documentClient.put(params).promise();
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