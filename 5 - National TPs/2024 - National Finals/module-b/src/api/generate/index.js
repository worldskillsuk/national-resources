const fs = require('fs');

const OUTPUT_OPTION = 2;
const OUTPUT_FORMAT = 'utf-8';

const exportResults = (results, path) => {
  // Pretty-print the JSON
  const data = JSON.stringify(results, null, OUTPUT_OPTION);

  fs.writeFileSync(path, data, OUTPUT_FORMAT);

  console.log(`Data has been written to ${path}`);
};

module.exports = {
  exportResults,
};
