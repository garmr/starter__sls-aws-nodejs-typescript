import 'source-map-support/register';

export const handler: AWSLambda.Handler = async (): Promise<any> => {
  const response = {
    version: process.env.VERSION,
    id: process.env.APIG_DEPLOYMENT_ID,
  };
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
