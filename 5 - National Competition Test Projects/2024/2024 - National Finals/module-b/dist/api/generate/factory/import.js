const { faker } = require('@faker-js/faker');

const { MEMBER } = require('../../common/constants');

/**
 * Make randomly-generated numbers odd so that we can quickly differentiate
 * between data that is manually imported (odd) and data fetched from the
 * API (even).
 */
const generateOddNumber = (options) => {
  const int = faker.number.int(options);

  if (int % 2 === 0) {
    return int + 1;
  }

  return int;
};

/**
 * Generates results for a single member.
 */
const single = (member, index) => ({
  id: index,
  awards: {
    gold: generateOddNumber({ min: 1, max: 10 }),
    silver: generateOddNumber({ min: 1, max: 15 }),
    bronze: generateOddNumber({ min: 1, max: 20 }),
    medallionForExcellence: generateOddNumber({
      min: 1,
      max: 25,
    }),
  },
  member,
});

/**
 * Generates results for each member.
 */
const all = () => {
  const results = Object.values(MEMBER).map(single);

  return results;
};

module.exports = all;
