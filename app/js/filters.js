'use strict';

/* Filters */

angular.module('myApp.filters', []).
filter('interpolate', ['version', function(version) {
	return function(text) {
		return String(text).replace(/\%VERSION\%/mg, version);
	}
}]).
filter('modifycoversize', function(){
	return function(input) {
		if (input!=null) 
			return input.replace("large", "small");
	};
});
