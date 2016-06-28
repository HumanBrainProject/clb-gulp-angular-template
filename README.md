# HBP Collaboratory Application Template using Gulp and Angular

## Bootstrap your template

Fork this project to bootstrap your own application for the HBP Collaboratory.

### Getting started with the template

To start a development server with the template, you need to install NodeJS 4+,
Bower and Gulp. You can then install the project dependencies. Once you
installed NodeJS for your system, run the following command from a Terminal.

```bash
npm install -g bower gulp
npm install
bower install
```

You can then run the development server using `gulp serve` command:

```bash
gulp serve
```

### Search and Replace for the project name

- Project Title: `Clb App Template` -> `My Project Title`
- methodCase: `clbAppTemplate` -> `clbAppTemplate`
- markupCase: `clb-app-template` -> `clb-app-template`

### Inject the HBP environement in the bootstrap

- Download https://collab.humanbrainproject.eu/config.json
- Replace the ``auth.clientId`` value using your own OIDC Client ID
- Add any configuration specific to your application

Please note that the environment should be served dynamically,
so your production environement should regenerate its content automatically
every day at least.

_Remove all of the above text from your project README. Your project README
starts below._
----

# Clb App Template

## Development

Once you downloaded the code, you are ready to setup your environment using
npm and bower. First, ensure node is installed on your system. You can then
install bower and gulp as a global dependency using `npm install -g bower gulp`,
then all the project local dependencies using NPM and Bower.

```shell
npm install -g bower gulp
npm install
bower install
```

The development server can be started using `gulp serve`

```shell
gulp serve
```

It's time to use Gulp tasks:
- `$ gulp` to build an optimized version of your application in folder dist
- `$ gulp serve` to start BrowserSync server on your source files with live reload
- `$ gulp serve:dist` to start BrowserSync server on your optimized application without live reload
- `$ gulp test` to run your unit tests with Karma
- `$ gulp test:auto` to run your unit tests with Karma in watch mode
- `$ gulp protractor` to launch your e2e tests with Protractor
- `$ gulp protractor:dist` to launch your e2e tests with Protractor on the dist files
