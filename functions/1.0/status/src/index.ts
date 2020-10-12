import 'source-map-support/register';
import { HTTPGetHandler } from './http-get-handler';

export const handler: AWSLambda.Handler = async (): Promise<any> => {
  const httpGetHandler = new HTTPGetHandler();
  var response = {
    id: process.env.APIG_DEPLOYMENT_ID,
    version: process.env.VERSION,
    status: await httpGetHandler.handle(),
  };
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
