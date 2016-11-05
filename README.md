# Website Performance Optimization Portfolio Project

## Installation

- Install [Node.js](https://nodejs.org/).
- Install [gulp](http://gulpjs.com/) globally:

      $ npm install --global gulp-cli

- Run `npm install` at the root directory of the project to install
dependencies:

      $ npm install

- Run gulp to build the project:

      $ gulp

  The build result is stored in the `dist/` directory.

## Accessing the Portfolio and Pizzeria pages

Open the `dist/index.html` in your browser to access the portfolio page. The
pizzeria page can be accessed from the link in the portfolio or directly at
`dist/views/pizza.html`.

## PageSpeed Insights Evaluation

This project is hosted on [GitHub Pages](https://pages.github.com/). So enter
the following URL to evaluate the portfolio page on
[PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/):

    https://caskuplich.github.io/frontend-nanodegree-mobile-portfolio/dist/

## Optimizations

### Portfolio

#### index.html

- Added `media="print"` attribute on the link to `print.css` file at line 28.
- Inlined the `style.css` using the `gulp-html-replace` plugin (lines 25-27).
- Moved the Google Analytics JavaScript code to the bottom of the page (lines
  76-85). Changed `analytics.js` URL to use HTTPS.
- Loaded `Open Sans` Google Font using the
  [Web Font Loader](https://github.com/typekit/webfontloader) library (lines
  10-23).
- Scaled down `views/images/pizzeria.jpg` to 100px width using
  [Gimp](https://www.gimp.org/) and stored it in `img/` directory. Changed the
  pizzeria `img` tag `src` to `img/pizzeria.jpg` (line 65).
- Minified scripts, images, and the `index.html` with gulp:
  - The scripts were minified with the `gulp-uglify` plugin. See the `scripts`
    task (line 18 of the `gulpfile.js`).
  - The images were minified with the `gulp-imagemin` plugin. See the
    `minify-images` task (line 12 of the `gulpfile.js`).
  - Before the HTML minification, the `style.css` was inlined in `index.html` by
    using the `gulp-html-replace` plugin. Then the `gulp-htmlmin` was used to
    minify `index.html` file. See the `build` task (line 29 of the
    `gulpfile.js`).
