const { faker } = require('@faker-js/faker');

const { MEMBER } = require('../../common/constants');

/**
 * Generates results for a single member.
 */
const single = (member, index) => ({
  id: index,
  awards: {
    gold: faker.number.int({ min: 1, max: 10, multipleOf: 2 }),
    silver: faker.number.int({ min: 1, max: 15, multipleOf: 2 }),
    bronze: faker.number.int({ min: 1, max: 20, multipleOf: 2 }),
    medallionForExcellence: faker.number.int({
      min: 1,
      max: 25,
      multipleOf: 2,
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
