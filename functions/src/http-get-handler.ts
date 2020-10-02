
import { APIGatewayEvent } from 'aws-lambda';
import "source-map-support/register";

export class HTTPGetHandler {

  public async handle(event: APIGatewayEvent): Promise<any> {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: message,
        event: event
      })
    };
  }
}
