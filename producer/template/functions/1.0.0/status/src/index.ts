import 'source-map-support/register';
import HTTPGetHandler from './http-get-handler';

export const handler: AWSLambda.Handler = async (): Promise<any> => {
  const response = {
    id: process.env.APIG_DEPLOYMENT_ID,
    version: process.env.VERSION,
    status: await HTTPGetHandler.handle(),
  };
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};

export default handler;
