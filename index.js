const fs = require('fs').promises;

/**
 * Returns the contents of 16M.bin.
 *
 * @returns {Promise<Buffer>}
 */
module.exports = async function () {
  const data = await fs.readFile('16M.bin', 'binary');
  return Buffer.from(data);
};
