const { Command } = require('commander');
const path = require('path');
const fs = require('fs');
const makeDir = require('make-dir');
const createFile = require('create-file');
const changeCase = require('change-case');
const chalk = require('chalk');

const program = new Command();

program
    .version('0.1.2')
    .arguments('<name>')
    .action((name, options, command) => {
      const targetFolder = path.join( process.env.INIT_CWD, changeCase.paramCase(name) );
      const targetBaseFileName = path.join( targetFolder, changeCase.paramCase(name) );
      const componentName = changeCase.pascalCase(name);
      makeDir( targetFolder ); // Create Component Directory
      fs.readFile( 'cli/template/component.tsx', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        const regex = /\$component\$/ig;
        let componentData = data.toString();
        componentData = componentData.replace(regex, componentName );
        createFile( targetBaseFileName + '.tsx', componentData, (err) => {
          if ( err ) {
            console.error(err);
          }
        });
      });
      fs.readFile( 'cli/template/props.ts', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        const regex = /\$component\$/ig;
        let componentData = data.toString();
        componentData = componentData.replace(regex, componentName );
        createFile( targetBaseFileName + '.props.ts', componentData, (err) => {
          if ( err ) {
            console.error(err);
          }
        });
      });
      fs.readFile( 'cli/template/style.ts', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        const componentData = data.toString();
        createFile( targetBaseFileName + '.style.ts', componentData, (err) => {
          if ( err ) {
            console.error(err);
          }
        });
      });
      createFile( path.join( targetFolder, 'package.json'), `{\n  "main": "${changeCase.paramCase(name)}.tsx"\n}`, (err) => {
        if ( err ) {
          console.error(err);
        }
      });
      console.log( chalk.greenBright(`Component ${name} Created Successfully!`));
    });

program.parse();
