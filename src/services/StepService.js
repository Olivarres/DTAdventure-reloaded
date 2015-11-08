import angular from 'angular';
import ActionService from './ActionService';

class StepService {

  constructor($http, ActionService) {
    this.http = $http;
    this.urlSteps = "http://localhost:3000/steps";
    this.urlSaves = "http://localhost:3000/save";
    this.ActionService = ActionService;
  }

  handleResponse(resp) {
    return resp.data;
  }

  getSteps() {
    return this.http.get(this.urlSteps)
    .then(result => result.data);
  }

  getStep(id) {
    return this.http.get(this.urlSteps + '/' + id)
    .then(result => result.data);
  }

  doAction(action, user) {
      return this.ActionService[action.type](user, action);
  }


  getSaves() {
    return this.http.get(this.urlSaves)
    .then(result => result.data);
  }

  deleteSave(id) {
    return this.http.delete(this.urlSaves+ '/'+id);
  }

  saveGame(user) {
    this.http.post(this.urlSaves, user)
    .then( res => this.ActionService.home(user, '/'));
  }

}

StepService.$inject = ['$http', 'ActionService'];

export default angular.module('services.stepservice', [ActionService])
.service('StepService', StepService)
.name;
