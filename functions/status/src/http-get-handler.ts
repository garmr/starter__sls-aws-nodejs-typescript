import { APIGatewayEvent } from 'aws-lambda';
import 'source-map-support/register';

export class HTTPGetHandler {
  public async handle(event: APIGatewayEvent): Promise<any> {
    return {
      status: {
        dependency1: '🟢',
        dependency2: '🔴',
      },
    };
  }
}
