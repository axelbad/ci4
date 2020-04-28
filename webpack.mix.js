const mix = require('laravel-mix');

mix.setPublicPath('public');

mix.js('writable/resources/js/app.js', 'js');
mix.sass('writable/resources/css/style.scss', 'css');