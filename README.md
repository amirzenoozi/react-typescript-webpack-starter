# React Starter With Typescript & Material-UI
Front-end starter kit:

[ ] Webpack as module bundler
[ ] Typescript
[ ] Material-UI
[ ] MultiLang Support With I18next
[ ] Styled Component Support
[ ] BrowserSync
[ ] SpriteSvg Module NPM Task
[ ] Redux As StateManager
[ ] SCP Module To Move Your Build
[ ] GoogleApi As TsLint
[ ] Custom RegEx for Filenames as Linter Rule
[ ] Jest As Test Module
[ ] Husky For PreCommits Rules


## Usage
Minimum node version: 14
After Clone This Repo You Can Start it By Running `yarn start` after that you have access to the UI application on `http:localhost:4001/`

## Environment Variables
You Can Have Your Env Variable By Using the `environments` folder and put your own `dev` and `prod` environments in different files. to read more about this type of environments variable structure you can read [This](https://amirzenoozi.medium.com/how-to-have-angular-environment-structure-in-react-applications-without-cra-e970443e9068).

## Use CLI
In This Starter We Put A simple Cli That You Change the template from `cli` folder. if you want to create component by this cli you just need to run `yarn run component component-name` and you will see the magic

## Build
Run `yarn run build` to build the project. The build artifacts will be stored in the `build/` directory.

## Running unit tests
Run `yarn run jest-test` to execute the unit tests via [Jest](https://jestjs.io/). \
and also Run `yarn run jest-test:watch` and check you test on development mode.

## Running Linter
Run `yarn run lint` to check the linter rules via [esLint](https://eslint.org/).
