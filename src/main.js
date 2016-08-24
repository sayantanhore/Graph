import angular from 'angular';
import $ from 'jquery';
import * as d3 from 'd3';

// Module: app - Holds the application
let graph = angular.module('graph', []);


graph.directive('graphAppContainer', () => {
  return {
    restrict: 'E',
    templateUrl: 'src/graph.app.container/graph.app.container.html'
  }
});