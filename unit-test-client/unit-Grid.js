// Unit test Grid.js

describe("Grid", function(){
    it ("Creates a Grid as 'rect'", function(){
        var grid = Object.create(Graph.ui.Grid);
        grid.init(container);
        var gridSVGComponent = grid.getComponent();
        assert.equal(gridSVGComponent[0][0].nodeName, "rect");
    });
});
