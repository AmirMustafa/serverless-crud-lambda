const AWS = require("aws-sdk");
const AWS_REGION = "ap-south-1";

AWS.config.update({
  region: AWS_REGION,
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const dynamoDBTableName = "product-inventory";

const healthPath = "/health";
const productPath = "/product";
const productsPath = "/products";

exports.default = async function (event) {
  console.log("Request event" + event);

  let response;
  switch (true) {
    case event.httpMethod === "GET" && event.path === healthPath:
      response = buildResponse(200);
      break;
  }
};

function buildResponse(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
}
