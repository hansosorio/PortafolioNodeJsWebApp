'use strict'
const AWS = require('aws-sdk');

AWS.config.update({ region: "us-east-1"});

exports.handler = async (event, context, callback) => {
  const documentClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-1"});

  let responseBody = "";
  let statusCode = 0;

  let {idportfolio} = event;
  
  if (idportfolio == undefined) {
    ({idportfolio} = JSON.parse(event.body));
  }
  
  if ( idportfolio == undefined) {
    const response = {
      statusCode: 403,
      headers: {
        "Content-Type": "application/json"
      },
      body: `Unable to get portfolio because missing parameters.`
    };
  
    return response;
  }

  const params = {
    TableName: "Portfolio",
    Key: {
      idportfolio: idportfolio
    }
  }

  try {
    const data = await documentClient.get(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 201;
  } catch (err) {
    responseBody = `Unable to get portfolio: ${err}`;
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