routes.inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
  .state('play', {
    url:'/play/:id',
    template: require('./play.html'),
    controller: 'PlayController',
    controllerAs: 'play'
  });
}
