## My Gulp 101

- Konfiguracja środowiska do pracy z HTML5+CSS3+JavaScript.
  * [Atom](https://atom.io) – a hackable text editor for the 21st Century.
    - [Atom Flight Manual](https://atom.io/docs/latest/) – the latest version
    - [Keyboard shortcuts](https://github.com/nwinkler/atom-keyboard-shortcuts)
  * [Gulp](http://gulpjs.com) – a toolkit for automating painful or
    time-consuming tasks in your development workflow, so you can stop
    messing around and build something.
    - Callum Macrae, [Building With Gulp](https://www.smashingmagazine.com/2014/06/building-with-gulp/)
    - Mark Goodyear, [Getting started with Gulp](https://markgoodyear.com/2014/01/getting-started-with-gulp/)
  * [Slack](https://slack.com) – where work happens.
    - [Getting Started](https://get.slack.help/hc/en-us/categories/202622877-Slack-Guides)
  * [Git](https://git-scm.com/book/en/v2).
    - [GitHub Account Setup and Configuration](https://git-scm.com/book/en/v2/GitHub-Account-Setup-and-Configuration)
    - M. Hartl, [Learn Enough Git to Be Dangerous](https://www.learnenough.com/git-tutorial)

Zainstaluj [node](https://nodejs.org/en/), a następnie zainstaluj program _gulp_.

```sh
npm install -g gulp
```

Utwórz nowe repozytorium i wykonaj te polecenia w głównym katalogu repozytorium.

```sh
npm init
npm install --save-dev gulp # npm i -D gulp
# dodaj do pliku .gitignore katalogi node_modules i dist

npm ls graceful-fs # ?
```


### HTML5 + CSS3 + ES6

Zmodyfikowany przykład z bloga J. Rexroad, [Automate Your Tasks Easily with Gulp.js](https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js).

```sh
mkdir -p src/{javascript,scss}
touch src/javascript/main.js
touch src/scss/style.scss
# optional
mkdir -p dist/assets/{stylesheets,javascript/vendor}
touch dist/assets/javascript/bundle.js
touch dist/assets/stylesheets/style.css
```

Zaczynamy.

```sh
npm install --save-dev jshint gulp-jshint jshint-stylish
```

TODO 1:

- [ ] [gulp-server-livereload](https://www.npmjs.com/package/gulp-server-livereload)
- [ ] concat and minify assets
- [ ] [gulp-markdown](https://www.npmjs.com/package/gulp-markdown) lub
  [gulp-asciidoctor](https://github.com/asciidoctor/gulp-asciidoctor)
- [ ] templates
- [ ] [delete generated folders](https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md)
- [ ] copy only changed files

TODO 2:

- [ ] [Setup a new project with Phenomic](https://phenomic.io/docs/setup/)


### Uruchamiamy stronę na GitHub

```sh
rename dist docs # ?
```


### Uruchamiamy stronę na Firebase

TODO
