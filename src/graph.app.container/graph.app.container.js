class GraphAppContainerCtrl {
  constructor($scope) {
    'ngInject';
    this.name = 'Sayantan';
  }
}

export function GraphAppContainerComp() {
  return {
    restrict: 'E',
    controllerAs: '$ctrl',
    scope: {},
    controller: GraphAppContainerCtrl,
    templateUrl: 'src/graph.app.container/graph.app.container.html'
  }
}
