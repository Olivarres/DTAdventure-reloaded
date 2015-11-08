import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './play.routes';
import PlayController from './play.controller';
import StepService from '../../services/StepService'
import UserService from '../../services/UserService';

export default angular.module('dtadventure.play', [uirouter, StepService, UserService])
.config(routing)
.controller('PlayController', PlayController)
.name;
