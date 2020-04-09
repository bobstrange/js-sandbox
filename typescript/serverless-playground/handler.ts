import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import * as dayjs from 'dayjs'

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Day: ${dayjs().format()}`,
      input: event,
    }, null, 2),
  };
}
