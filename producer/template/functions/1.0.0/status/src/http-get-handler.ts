import 'source-map-support/register';

class HTTPGetHandler {
  public static async handle(): Promise<any> {
    return {
      dependency1: '🟢',
      dependency2: '🔴',
    };
  }
}

export default HTTPGetHandler;
