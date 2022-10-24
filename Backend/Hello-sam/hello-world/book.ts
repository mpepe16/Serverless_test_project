const { DynamoDB } = require("aws-sdk")

const db = new DynamoDB.DocumentClient()
const TableName = process.env.TABLE_NAME

module.exports.create = async (event: { body: { name: any; pages: any; author: any } }) => {
  const newBook = {
    name: event.body.name,
    age: event.body.pages,
    author: event.body.author,
  }

  await db
    .put({
      TableName,
      Item: newBook,
    })
    .promise()

  return { statusCode: 200, body: JSON.stringify(newBook) }
}