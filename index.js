#!/usr/bin/node

const {
  exec
} = require('child_process')
const download = require('download')

exec('npm i -D @fullhuman/postcss-purgecss autoprefixer parcel-bundler postcss tailwindcss', (err, stdout) => {
  if (err) {
    return
  } else {
    console.log('Successfully installed the packages.');
  }
})

download('https://raw.githubusercontent.com/didiercatz/tailwindcss-parcel-boilerplate/master/postcss.config.js').then(data => {
  fs.writeFileSync('./postcss.config.js', data);
});