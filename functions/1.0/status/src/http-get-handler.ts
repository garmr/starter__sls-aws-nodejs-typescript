import 'source-map-support/register';

export class HTTPGetHandler {
  public async handle(): Promise<any> {
    return {
      dependency1: '🟢',
      dependency2: '🔴',
    };
  }
}
