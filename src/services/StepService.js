import angular from 'angular';

class StepService {

  handleResponse(resp) {
    return resp.data;
  }

  getSteps($http) {
    return this.http.get(this.url)
    .then(result => result.data);
  }


  constructor($http) {
    this.http = $http;
    this.url = "http://localhost:3000/steps";
  }
}

StepService.$inject = ['$http'];

export default angular.module('services.stepservice', [])
.service('StepService', StepService)
.name;
