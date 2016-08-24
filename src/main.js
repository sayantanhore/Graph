import angular from 'angular';
import $ from 'jquery';
import * as d3 from 'd3';
import ngMaterial from 'angular-material';
import {GraphAppContainerComp} from './graph.app.container/graph.app.container';

// Module: app - Holds the application
let graph = angular.module('graph', [ngMaterial]);


graph.directive('graphAppContainer', GraphAppContainerComp);
