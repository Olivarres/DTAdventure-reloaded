import angular from 'angular';

class UserService {
  constructor() {
    this.life = 10;
    this.gold = 100;
    this.start = true;
    this.actions = [];
    this.save = 0;
  }

  
}

export default angular.module('services.userservice', [])
.service('UserService', UserService)
.name;
