import 'source-map-support/register';
import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { HTTPGetHandler } from './http-get-handler';

export const handler: Handler = async (event: APIGatewayEvent, context: Context, callback: Callback): Promise<any> => {
  const httpGetHandler = new HTTPGetHandler();
  const response = await httpGetHandler.handle();
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
