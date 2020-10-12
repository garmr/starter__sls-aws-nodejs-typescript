import { HTTPGetHandler } from '../src/http-get-handler';

var unitUnderTest: HTTPGetHandler;

beforeEach(() => {
  unitUnderTest = new HTTPGetHandler();
});

describe('Status producer', () => {
  // UnitOfWork_StateUnderTest_ExpectedBehavior
  describe('HTTP Get handler', () => {
    test(' with any event returns {dependency1: {status : 🟢}}', async () => {
      // Arrange

      // Act
      const result = await unitUnderTest.handle();

      // Assert
      expect(result).toHaveProperty('dependency1');
      expect(result.dependency1).toBe('🟢');
    });
  });
});
