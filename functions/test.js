// non async
exports.handler = (event, context, callback) => {
    callback(null, {
        statusCode: 200,
        body: "No worries, all is working fine!" +
         `${event.path},${event.httpMethod},${event.headers},${JSON.stringify(event.queryStringParameters)},${JSON.stringify(event.body)},`
    })
}

// aync version

// exports.handler = async (event, context) => {
//     return {
//         statusCode: 200,
//         body: "Wow my api works!"
//     }
// }

// 
exports.handler = async (event, context) => {
    const name = event.queryStringParameters.name || "banana"
    return {
        statusCode: 200,
        body: `Wow my api works! Welcome ${name}`
    }
}