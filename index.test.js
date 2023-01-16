const load16M = require('./index.js');

describe('load16M', () => {
  it('resolves to a Buffer', async () => {
    const result = await load16M();
    expect(result).toBeInstanceOf(Buffer);
  });
});
