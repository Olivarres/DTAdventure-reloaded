import angular from 'angular';

class ActionService {

  constructor($location) {
    this.location = $location;
  }

  home(action) {
    this.location.path(action);
  }

  go(user, action) {
    //user.actions.splice(0,user.actions.length);
    this.location.path('/play/'+action.params.step);
  }

  fight(user, action) {
    user.life+= action.params.life;
    user.gold+= action.params.gold;
    user.actions.push(action.name);
    return user;
  }

  chest(user, action) {
    user.gold+= action.params.gold;
    return user;
  }
}

ActionService.$inject = ['$location'];

export default angular.module('services.actionservice', [])
.service('ActionService', ActionService)
.name;
