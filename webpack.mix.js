const mix = require('laravel-mix');

mix.setPublicPath('assets');

mix.js('src/js/app.js', 'js')
   .sass('src/scss/app.scss', 'css')
   .options({
      processCssUrls: false,
      postCss: [
         require('autoprefixer')
      ]
   })
   .sourceMaps()
   .version();

mix.copy('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', 'assets/js')
   .copy('node_modules/jquery/dist/jquery.min.js', 'assets/js');

// Add BrowserSync
mix.browserSync({
    proxy: false,
    server: {
        baseDir: './'
    },
    files: [
        'assets/css/*.css',
        'assets/js/*.js',
        '*.html'
    ]
});