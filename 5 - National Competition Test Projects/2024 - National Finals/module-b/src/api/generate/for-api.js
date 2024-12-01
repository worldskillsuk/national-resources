const { exportResults } = require('.');
const generateResults = require('./factory/api');

const results = generateResults();

exportResults(results, 'data/api/results.json');
