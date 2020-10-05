const handler = require('../src/index').handler;
const LambdaTester = require('lambda-tester');

describe('Status producer', () => {
  // UnitOfWork_StateUnderTest_ExpectedBehavior
  describe('HTTP Get handler', () => {
    test(' with any event returns {version: "0.0.1"}', async () => {
      // Arrange
      process.env.VERSION = '0.0.1';

      // Act
      await LambdaTester(handler)
        .event({})
        .expectResult((result) => {
          // Assert
          expect(result).toHaveProperty('body');
          var message = JSON.parse(result.body);
          expect(message).toHaveProperty('version');
          expect(message.version).toBe(process.env.VERSION);
        });
    });
  });
});
