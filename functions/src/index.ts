import 'source-map-support/register';
import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { HTTPGetHandler } from './http-get-handler';

export const handler: Handler = async (event: APIGatewayEvent, context: Context, callback: Callback) => {
  try {
    const httpGetHandler = new HTTPGetHandler();
    const response = await httpGetHandler.handle(event);
    return callback(null, response);
  } catch (exception) {
    return callback(exception, event);
  }
};
