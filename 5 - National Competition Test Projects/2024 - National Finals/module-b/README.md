# WorldSkills UK 2024, Stage 3, Module B: (Front End Development)

## For Competitors

Distributable files are in [dist](dist). These files are intended to be shared with competitors and include the test project and media files.

## For Experts

Files relevant to the running of the competition are in [src](src). These files are intended for authorised members only and must NOT be shared with competitors.

See [src/api](src/api) for the API that can be served to competitors. This will need to be configured to suit the competition environment.

Remember:

- [ ] Set `BASE_URL` in your `.env`, if needed \*
- [ ] Set `PORT` in your `.env`, if needed \*
- [ ] Generate the API results data using `npm run generate:api` \*
- [ ] Generate the importable results data using `npm run generate:import` \*
- [ ] Host the API on a domain that competitors can access
- [ ] Inform competitors of the domain so that they can use it

\* See [src/api/README.md](src/api/README.md) for more details.

### Marking

When marking, you can get a hint as to whether competitors used the API or manually imported data \*\*. Look at the counts (`gold`, `silver`, `bronze`, and `medallionForExcellence`):

- If fetched from the API, the counts will be even numbers.
- If imported manually, the counts will be odd numbers.

\*\* You should still review the code for confirmation.
