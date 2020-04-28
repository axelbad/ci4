const mix = require('laravel-mix');


mix.setPublicPath('public');

mix.scripts([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'writable/resources/js/app.js'
], 'public/js/all.js').version();

mix.styles([
    'node_modules/bootstrap/dist/css/bootstrap.css',
    'writable/resources/css/style.css'
], 'public/css/all.css').version();

/*
mix
  .setPublicPath('public')
  .scripts('node_modules/jquery/dist/jquery.min.js', 'public/js/all.js')
  .styles('node_modules/bootstrap/dist/css/bootstrap.css', 'public/css/all.css')
  .version();
*/
