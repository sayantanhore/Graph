'use strict';

var Graph = Graph || {};

Graph.globals = (function(){
	var screenWidth = null;
	var screenHeight = null;
	var smallBlockDim = null;
	var largeBlockDim = null;
    
    var origin = {
        x: null,
        y: null
    };
    
    var smallBlockStrokeWidth = null;
    var largeBlockStrokeWidth = null;
    var gridStrokeWidth = null;
    var axisStrokeWidth = null;
	
	(function __init(){
		smallBlockDim = 10;
		largeBlockDim = 100;
        
        smallBlockStrokeWidth = 0.2;
        largeBlockStrokeWidth = 0.5;
        gridStrokeWidth = 2;
        axisStrokeWidth = 1;
	})();
	
	var callables = {
		setScreenDim: function($window){
			screenWidth = $window.width();
			screenHeight = $window.height();
		},
        
		getScreenDim: function(){
			return {
				screenWidth: screenWidth,
				screenHeight: screenHeight
			}
		},
        
		setBlockDim: function(blockDim){
			if (blockDim.hasOwnProperty('smallBlockDim') && blockDim.smallBlockDim !== null){
				smallBlockDim = blockDim.smallBlockDim;
			}
			if (blockDim.hasOwnProperty('largeBlockDim') && blockDim.largeBlockDim !== null){
				largeBlockDim = blockDim.largeBlockDim;
			}
		},
		
		getBlockDim: function(){
			return {
				smallBlockDim: smallBlockDim,
				largeBlockDim: largeBlockDim
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
        
        getOrigin: function(){
            return origin;
        },
        
		createPathString: function(dim){
			return 'M ' + dim + ' 0 L 0 0 0 ' + dim
		},
		
		getPathAxisX: function(){
			var startY = Math.ceil((parseFloat(screenHeight) / 2) / largeBlockDim);
            origin.y = startY * largeBlockDim;
			console.log(origin.y);
			return 'M 0 ' + origin.y + ' H ' + screenWidth;
		},
		
		getPathAxisY: function(){
			var startX = parseInt((parseFloat(screenWidth) / 2) / largeBlockDim);
            origin.x = startX * largeBlockDim;
			console.log(origin.x);
			return 'M ' + origin.x + ' 0 V ' + screenHeight;
		}
		
	}
	
	return callables;	
})();
