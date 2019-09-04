let mix = require("laravel-mix");
require("laravel-mix-versionhash");
require("laravel-mix-copy-watched");
require("laravel-mix-imagemin");
require("laravel-mix-polyfill");
let { CleanWebpackPlugin } = require("clean-webpack-plugin");
let wpPot = require("wp-pot");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 | https://stackoverflow.com/questions/55834262/how-to-lint-sass-scss-on-laravel-mix
 */

mix
  .setPublicPath("dist/")
  .imagemin("img/**.*", {
    context: "src"
  })
  .js("src/js/src/main.js", "js")
  .sass("src/scss/main.scss", "css")
  .sass("src/scss/wp-admin.scss", "css")
  .sass("src/scss/wp-editor.scss", "css")
  .sass("src/scss/wp-login.scss", "css")
  .options({
    processCssUrls: false,
    postCss: [require("postcss-css-variables")()]
  })
  .sourceMaps()
  .copyWatched("src/fonts", "dist/fonts")
  .polyfill({
    enabled: true,
    targets: false
  })
  .webpackConfig({
    plugins: [
      new CleanWebpackPlugin({
        verbose: true,
        // dry: true,
        // cleanStaleWebpackAssets: false,
        // protectWebpackAssets: false,
        cleanOnceBeforeBuildPatterns: ["**/*.css", "**/*.js", "!img/*"]
      })
    ],
    watchOptions: {
      ignored: /node_modules/
    }
  })
  .versionHash({
    delimiter: "-"
  });

// wpPot({
//   destFile: "lang/@textdomain.pot",
//   domain: "@textdomain",
//   package: "@theme"
// });
