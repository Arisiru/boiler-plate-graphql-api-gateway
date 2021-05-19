const schema = require('./schema');
const resolver = require('./resolver');

describe('[Type.LivecheckResult]', () => {
  it('should compile schema', async () => {
    expect(schema).toMatchSnapshot();
  });

  const livecheckResult = Object.freeze({
    status: 'OK',
  });

  it('maps LivecheckResult to "status" property', () => {
    expect(resolver.LivecheckResult.status(livecheckResult)).toEqual(
      livecheckResult.status
    );
  });
});
