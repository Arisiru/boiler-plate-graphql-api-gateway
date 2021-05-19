const dataSourcesConstructor = require('./constructor');

describe('[Datasources]', () => {
  it('should be defined', async () => {
    expect(dataSourcesConstructor).toBeDefined();
  });
  it('should be runnable', async () => {
    const dataSources = dataSourcesConstructor();
    expect(dataSources).toBeDefined();
  });
});
