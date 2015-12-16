var Graph = Graph || {};

Graph.globals = (function(){
	var screenWidth = null;
	var screenHeight = null;
	var smallBlockDim = null;
	var largeBlockDim = null;
	
	(function __init(){
		smallBlockDim = 10;
		largeBlockDim = 100;
	})();
	
	var callables = {
		setScreenDim: function($window){
			screenWidth = $window.width();
			screenHeight = $window.height();
		},
		
		setBlockDim: function(blockDim){
			if (blockDim.hasOwnProperty('smallBlockDim') && blockDim.smallBlockDim !== null){
				smallBlockDim = blockDim.smallBlockDim;
			}
			if (blockDim.hasOwnProperty('largeBlockDim') && blockDim.largeBlockDim !== null){
				largeBlockDim = blockDim.largeBlockDim;
			}
		},
		
		getScreenDim: function(){
			return {
				screenWidth: screenWidth,
				screenHeight: screenHeight
			}
		},
		
		getBlockDim: function(){
			return {
				smallBlockDim: smallBlockDim,
				largeBlockDim: largeBlockDim
			}
		},
		
		createPathString: function(dim){
			return 'M ' + dim + ' 0 L 0 0 0 ' + dim
		}
	}
	
	return callables;	
})();
