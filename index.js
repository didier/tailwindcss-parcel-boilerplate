#!/usr/bin/env node

const {
  exec
} = require('child_process')

const fs = require('fs')

const html = `<!DOCTYPE html>
<html lang="en">

<head>
  <title>Tailwind Starter Template</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <link href="assets/css/style.css" rel="stylesheet" />
</head>

<body>
    <h1 class="text-4xl text-center my-16 text-gray-400 font-bold font-sans">Greetings, comrade.</h1>
</body>

</html>`

const css = `
@tailwind  base;

@tailwind  components;

@tailwind  utilities;`

const json = `{
  "scripts": {
    "dev": "parcel src/index.html",
    "prod": "parcel build src/index.html --public-url='./'",
    "build": "parcel build src/index.html --public-url='./'"
  }
}
`

const commands = 'npm i -D @fullhuman/postcss-purgecss autoprefixer@^9 parcel-bundler postcss@^7 tailwindcss@npm:@tailwindcss/postcss7-compat'

function dependencies() {
  console.log('📦  Installing dependencies from NPM... this will take a bit.');
  console.log('✌ Configuring files in the meantime.');

  exec(commands, (err) => {
    if (err) {
      throw err
    } else {
      console.log('✅  All done! \n');
    }
  })
}

function postcss() {
  console.log(`  ↳ Creating PostCSS config...`);

  fs.writeFile('postcss.config.js', config, (err) => {
    if (err) {
      throw err
    } else {
      return console.log('      ✅  postcss.config.js\n')
    }
  })
}

function treeHTML() {
  console.log(`  ↳ Creating index.html...`);

  fs.writeFile('src/index.html', html, (err) => {
    if (err) {
      throw err
    } else {
      console.log('      ✅  src/index.html\n')
    }
  })

}

function treeDirs() {
  console.log(`  ↳ Creating file structure...`);

  fs.mkdir('src/assets/css', {
    recursive: true
  }, err => {
    if (err) {
      throw err
    } else {
      console.log('      ✅  src/assets/css')
    }
  })

  fs.mkdir('src/assets/js', {
    recursive: true
  }, err => {
    if (err) {
      throw err
    } else {
      console.log('      ✅  src/assets/js\n')
    }
  })
}

function treeCSS() {
  console.log(`  ↳ Creating style.css...`);

  fs.writeFile('src/assets/css/style.css', css, (err) => {
    if (err) {
      throw err
    } else {
      console.log('      ✅  style.css\n')
    }
  })
}

function treeJS() {
  console.log('  ↳ Creating index.js...');

  fs.writeFile('src/assets/js/index.js', '', (err) => {
    if (err) {
      throw err
    } else { }

    console.log('      ✅  index.js\n')
  })
}

function treePkg() {
  console.log('  ↳ Creating package.json...');

  fs.writeFile('package.json', json, (err) => {
    if (err) {
      throw err
    } else { }

    console.log('      ✅  package.json\n')
  })
}

async function install() {
  treePkg()

  await setTimeout(async () => {
    dependencies()
  }, 0)

  await setTimeout(async () => {
    postcss()
  }, 10)

  await setTimeout(async () => {
    treeDirs()
  }, 250)

  await setTimeout(async () => {
    treeHTML()
  }, 500)

  await setTimeout(async () => {
    treeCSS()
  }, 750)

  await setTimeout(async () => {
    treeJS()
  }, 1000)

  await setTimeout(async () => {
    treePkg()
  }, 1250)

  await setTimeout(async () => {
    console.log('Waiting for dependencies to finish installing...');
  }, 1500)

}

install()