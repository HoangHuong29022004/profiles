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

// Copy các file từ node_modules
mix.copy('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', 'assets/js')
   .copy('node_modules/jquery/dist/jquery.min.js', 'assets/js'); 