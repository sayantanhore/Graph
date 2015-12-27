"use strict";

var Graph = Graph || {};

Graph.ui = (function(){
    
    // Declare UI components
    var grid = null;
    var axisX = null;
    var axisY = null;
    
    function init(){
        // Initiate properties
        var __globals = Graph.globals;
        __globals.setScreenDim($(window));
        __globals.setBlockDim({
            'smallBlockDim': parseInt(__globals.getScreenDim().screenWidth) / 100,
            'largeBlockDim': parseInt(__globals.getScreenDim().screenWidth) / 10
        });
        
        // Create SVG container
        var svg = d3.select('#container').append('svg')
            .attr({
                x: 0,
                y: 0,
                width: __globals.getScreenDim().screenWidth,
                height: __globals.getScreenDim().screenHeight
            });
            
        // Create definitions
        var defs = svg.append('defs');
        
        // Create grid blocks
        var smallBlock = defs.append('pattern')
            .attr({
                'id': 'small_block',
                'patternUnits': 'userSpaceOnUse',
                'width': __globals.getBlockDim().smallBlockDim,
                'height': __globals.getBlockDim().smallBlockDim
            })
            .append('path')
            .attr({
                'fill': 'none',
                'stroke': 'gray',
                'stroke-width': __globals.getStrokeWidth().smallBlock,
                'd': __globals.createPathString(__globals.getBlockDim().smallBlockDim)
            });
            
        var largeBlock = defs.append('pattern')
            .attr({
                'id': 'large_block',
                'patternUnits': 'userSpaceOnUse',
                'width': __globals.getBlockDim().largeBlockDim,
                'height': __globals.getBlockDim().largeBlockDim
            });
            largeBlock.append('rect')
            .attr({
                'width': __globals.getBlockDim().largeBlockDim,
                'height': __globals.getBlockDim().largeBlockDim,
                'fill': 'url(#small_block)'
            });
            largeBlock.append('path')
            .attr({
                'fill': 'none',
                'stroke': 'gray',
                'stroke-width': __globals.getStrokeWidth().largeBlock,
                'd': __globals.createPathString(__globals.getBlockDim().largeBlockDim)
            });
        
        // Create grid 
        grid = svg.append('rect')
            .attr({
                'x': 0,
                'y': 0,
                'width': __globals.getScreenDim().screenWidth,
                'height': __globals.getScreenDim().screenHeight,
                'stroke': 'black',
                'stroke-width': __globals.getStrokeWidth().grid,
                'fill': 'url(#large_block)'
            });
            
        // Create AxiX
        axisX = svg.append('path')
            .attr({
                'stroke': 'gray',
                'stroke-width': __globals.getStrokeWidth().axis,
                'd': __globals.getPathAxisX()
            }); 
            
        // Create AxiY    
        axisY = svg.append('path')
            .attr({
                'stroke': 'gray',
                'stroke-width': __globals.getStrokeWidth().axis,
                'd': __globals.getPathAxisY()
            });     
    }
    
    // Create UI component object
    return {
        init: init,
        components: {
            grid: {
                get: function(){
                    return grid;
                },
                
                show: function(){
                    grid.attr('visibility', 'visible');
                },
                
                hide: function(){
                    grid.attr('visibility', 'hidden');
                },
            },
            
            axis: {
                getX: function(){
                    return axisX;
                },
                getY: function(){
                    return axisY;
                },
                
                show: function(){
                    axisX.attr('visibility', 'visible');
                    axisY.attr('visibility', 'visible');
                },
                
                hide: function(){
                    axisX.attr('visibility', 'hidden');
                    axisY.attr('visibility', 'hidden');
                }
            },
        }
    };
    
})();
