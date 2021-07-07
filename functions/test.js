const { SECRET_API } = process.env 

// non async
// exports.handler = (event, context, callback) => {
//     callback(null, {
//         statusCode: 200,
//         body: "No worries, all is working fine!" +
//             `${event.path},${event.httpMethod},${event.headers},${JSON.stringify(event.queryStringParameters)},${JSON.stringify(event.body)},`
//     })
// }

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

    if (event.httpMethod === "POST") {

        // When the method is POST, the name will no longer be in the event’s
        // queryStringParameters – it’ll be in the event body encoded as a query string
        const params = querystring.parse(event.body);
        const name = params.name || "World";

        return {
            statusCode: 200,
            body: `Hello, ${name}`,
        };
    } else {
        return {
            statusCode: 200,
            body: `Wow my api works! Welcome ${name} ${SECRET_API}`
        }
    }
}