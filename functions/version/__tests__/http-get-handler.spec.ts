import { HTTPGetHandler } from '../src/http-get-handler';

var objectUnderTest: HTTPGetHandler;

beforeEach(() => {
  objectUnderTest = new HTTPGetHandler();
});

test('version is 1.0', async () => {
  // Arrange

  // Act
  const result = await objectUnderTest.handle({});

  // Assert
  expect(result).toEqual({ version: '1.0' });
});
