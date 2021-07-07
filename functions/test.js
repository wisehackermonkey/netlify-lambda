exports.handler = (event, context, callback) => {
    callback(null, {
        statusCode: 200,
        body: "No worries, all is working fine!" +
         `${event.path},${event.httpMethod},${event.headers},${JSON.stringify(event.queryStringParameters)},${JSON.stringify(event.body)},`
    })
}