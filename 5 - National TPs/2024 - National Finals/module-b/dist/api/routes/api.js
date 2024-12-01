const express = require('express');

const { paginate } = require('../common/helpers');
let data = null;

try {
  data = require('../data/api/results.json');
} catch (error) {
  console.error('[API] ERROR');
  console.group('<----------');
  console.error(error);
  console.groupEnd('[API] Unable to load results data');
  console.log('---------->');

  console.error('[API] Unable to load results data');
  console.warn(
    '[API] Did you run `npm run generate:api` and `npm run generate:import`?'
  );
  console.warn('[API] See README.md for more information.');

  process.exit(1);
}

const router = express.Router();

router.get('/results-by-member', (req, res) => {
  const paginated = paginate(req.query, data);

  res.json(paginated);
});

module.exports = router;
