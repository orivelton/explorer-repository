# Getting Started with explorer-repository

This project list React repository from Github in a table where you can filter and sorte by name, stars, and forks.

![explorer-repository demo](./docs/demo.gif 'Demo')

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Docker

Create image:
`docker image build -t explorer-repository:latest -f Dockerfile.dev .`

Run image
`docker run -p 3000:3000 --name explorer-repository explorer-repository:latest`

### .env file

You can find a `.env.example` file that contains the `REACT_APP_GITHUB_TOKEN` variable. Generate your personal token on https://docs.github.com/en/graphql/guides/forming-calls-with-graphql#authenticating-with-a-personal-access-token
