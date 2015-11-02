import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';
import StepService from "../../services/StepService"

export default angular.module('dtadventure.home', [uirouter, StepService])
.config(routing)
.controller('HomeController', HomeController)
.name;
