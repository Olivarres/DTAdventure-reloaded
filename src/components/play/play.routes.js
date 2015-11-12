routes.inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
  .state('play', {
    abstrac: true,
    url: '/play/:id',
    template: require('./play.html'),
    controller: 'PlayController',
    controllerAs: 'play'
  })
  .state('play.stats', {
    // url:'/play/:id',
    // views: {
    //   '@': {
    //     templateUrl: require('./play.html'),
    //     controller: 'PlayController',
    //     controllerAs: 'play'
    //   },
      views: {
        'Stats@play': {
        template: require('./play.stats.html')
      }
    },

  });
}
