'use strict';

var Graph = Graph || {};

Graph.globals = (function(){
    var smallBlockDimFactor = 120;
    var largeBlockDimFactor = 12;
    var smallBlockStrokeWidth = 0.2;
    var largeBlockStrokeWidth = 0.4;
    var gridStrokeWidth = 2;
    var axisStrokeWidth = 0.5;
    var origin = {
        x: 0,
        y: 0
    };
    
    return {
        getBlockDimFactor: function(){
            return {
                small: smallBlockDimFactor,
                large: largeBlockDimFactor
            }
        },
        
        getStrokeWidth: function(){
            return {
                smallBlock: smallBlockStrokeWidth,
                largeBlock: largeBlockStrokeWidth,
                grid: gridStrokeWidth,
                axis: axisStrokeWidth
            }
        },
        createPathString: function(dim){
            return 'M ' + dim + ' 0 L 0 0 0 ' + dim
        }
    };
})();


