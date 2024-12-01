# WorldSkills Shanghai 2026 API

This project provides a simple API for returning WorldSkills Shanghai 2026 results data.

## Generating Results Data

### API

To generate the results data to serve via the API, run `npm run generate:api`.

The generated data will be saved as [data/api/results.json](data/api/results.json).

**WARNING**: This will overwrite any existing file of the same name in the [data/api](data/api) folder.

### Import

To generate the results data that can be manually imported, run `npm run generate:import`.

The generated data will be saved as [data/import/results.json](data/import/results.json).

**WARNING**: This will overwrite any existing file of the same name in the [data/import](data/import) folder.

Remember to replace the file in [dist/media/data](../../dist/media/data/).

## Web Server

By default, the project will be accessible at `http://localhost:3000`, where:

- `http://localhost` is the `BASE_URL`; and
- `3000` is the `PORT`.

Both can be overridden using environment variables of the same name.

To set these, add them to a `.env` file. See [.env.example](.env.example) for an example.

### Production

To start the web server, run `npm start`.

### Development

When developing, run `npm run dev`.

This will watch for changes and restart the web server when needed to reflect updates you make.
