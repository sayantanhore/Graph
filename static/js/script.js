'use strict';

$(document).ready(function(){
    console.log("Ready");
    
    // Initiate properties
    var __globals = Graph.globals;
    __globals.setScreenDim($(window));
    __globals.setBlockDim({
        'smallBlockDim': parseInt(__globals.getScreenDim().screenWidth) / 100,
        'largeBlockDim': parseInt(__globals.getScreenDim().screenWidth) / 10
    });
    
    var svg = d3.select('#container').append('svg')
        .attr({
            x: 0,
            y: 0,
            width: __globals.getScreenDim().screenWidth,
            height: __globals.getScreenDim().screenHeight
        });
        
    var defs = svg.append('defs');
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
            'stroke-width': '1',
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
            'stroke-width': '1.5',
            'd': __globals.createPathString(__globals.getBlockDim().largeBlockDim)
        });
        
    svg.append('rect')
        .attr({
            'x': 0,
            'y': 0,
            'width': __globals.getScreenDim().screenWidth,
            'height': __globals.getScreenDim().screenHeight,
            'stroke': 'black',
            'stroke-width': 2,
            'fill': 'url(#large_block)'
        });
    svg.append('path')
        .attr({
            'stroke': 'gray',
            'stroke-width': '2',
            'd': __globals.createAxisX()
        }); 
        
    svg.append('path')
        .attr({
            'stroke': 'gray',
            'stroke-width': '2',
            'd': __globals.createAxisY()
        }); 
        
    svg.append('text')
        .attr({
            'x': '100px',
            'y': '200px',
            'font-size': '14px',
            'font-family': 'monospace',
            'fill': 'blue'
        })
        .text(123333);
});