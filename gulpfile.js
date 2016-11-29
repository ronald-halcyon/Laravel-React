var elixir = require('laravel-elixir');
require('es6-promise').polyfill();
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */
// Browserify
// var browserify = require('laravel-elixir-browserify');


elixir(function(mix) {
	// Browserify
	// browserify.init();

	// Jquery
	mix.copy('node_modules/bootstrap/node_modules/jquery/dist/jquery.min.js', 
		'resources/assets/js/vendor/jquery.min.js');

	// Tether
	mix.copy('node_modules/bootstrap/node_modules/tether/dist/js/tether.min.js', 
		'resources/assets/js/vendor/tether.min.js');
	mix.copy('node_modules/bootstrap/node_modules/tether/dist/css/tether.min.css', 
		'resources/assets/css/vendor/tether.min.css');

    // Bootstrap
	mix.copy('node_modules/bootstrap/dist/js/bootstrap.min.js', 
		'resources/assets/js/vendor/bootstrap.min.js');

	mix.copy('node_modules/bootstrap/dist/css/bootstrap.min.css', 
		'resources/assets/css/vendor/bootstrap.min.css');
    


    mix.styles([
    		'vendor/tether.min.css',
    		'vendor/bootstrap.min.css',
    		'vendor/font-awesome.min.css',
    		'main.css'
    	], 'public/css/app.min.css')
       .scripts([
       		'vendor/jquery.min.js',
       		'vendor/tether.min.js',
       		'vendor/bootstrap.min.js' 
       	], 'public/js/vendor.min.js')
       .scripts([
       		'main.js'
       	], 'public/js/app.min.js');
});
