const { exportResults } = require('.');
const generateResults = require('./factory/import');

const results = generateResults();

exportResults(results, 'data/import/results.json');
