routing.$inject = ['$urlRouterProvider', '$locationProvider'];

export default function routing($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  //$urlRouterProvider.when('/', '/play');

  $urlRouterProvider
  .when('/play', '/play')
  .otherwise('/');
}
