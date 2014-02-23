'use strict';

/* Services */

angular.module('myApp.services', ['ngResource']).
factory('soundcloudService', ['$resource', function($resource) {   
	return  $resource('https://api.soundcloud.com/tracks.json?client_id=:clientid&q=:q&filter=public', 
		{clientid: "3c5475d258553fb74bca0144c6729f9c"},
		{query: {method: 'GET', params:{q: "we will rock you"}, isArray:true}});
	}])
.value('version', '0.1');
