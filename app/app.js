'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [

  'ui.router',
    'ui.router.stateEvents',
  'myApp.view1',
  'myApp.view1.editUser',
  'myApp.view2',
  'myApp.version',
  'myApp.userService',
]).
config([function() {
  // $locationProvider.hashPrefix('!');
  // $routeProvider.otherwise({redirectTo: '/view3'});
}]);