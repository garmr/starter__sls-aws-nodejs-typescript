import { HTTPGetHandler } from '../src/http-get-handler';

var objectUnderTest: HTTPGetHandler;

beforeEach(() => {
  objectUnderTest = new HTTPGetHandler();
});

test('dependency1 status is 🟢', async () => {
  // Arrange

  // Act
  const result = await objectUnderTest.handle({});

  // Assert
  expect(result.status.dependency1).toBe('🟢');
});
