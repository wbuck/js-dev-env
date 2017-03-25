// This file isn't transpiled, so must use CommonJS and ESS.

// Register babel to transpile before out tests run.
require( 'babel-register' )();

// Disable webpack feature that mocha doesn't understand.
require.extensions[ '.css' ] = function (){};
