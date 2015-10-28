import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// import 'jquery/dist/jquery.min.js';
// import 'bootstrap/dist/js/bootstrap.min.js';


import angular from 'angular';
import uirouter from 'angular-ui-router';
import home from './components/home';
import routing from './app.config';

angular.module('dtadventure', [uirouter, home])
.config(routing);
