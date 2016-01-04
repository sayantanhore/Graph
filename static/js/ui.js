"use strict";

var Graph = Graph || {};

Graph.ui = (function(){
    
    // Declare UI components
    var grid = null;
    
    var axisX = null;
    var axisY = null;
    
    var lblOrigin = null;
    var lblAxisXPositive = [];
    var lblAxisXNegative = [];
    var lblAxisYPositive = [];
    var lblAxisYNegative = [];
    
    function init(container){
        // Initiate properties
        var __globals = Graph.globals;
        __globals.setScreenDim($(container));
        __globals.setBlockDim({
            'smallBlockDim': parseInt(__globals.getScreenDim().screenWidth) / 100,
            'largeBlockDim': parseInt(__globals.getScreenDim().screenWidth) / 10
        });
        
        // Create SVG container
        var svg = d3.select(container).append('svg')
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
                'stroke': 'green',
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
                'stroke': 'green',
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
                'stroke': 'green',
                'stroke-width': __globals.getStrokeWidth().axis,
                'd': __globals.getPathAxisX()
            }); 
            
        // Create AxiY    
        axisY = svg.append('path')
            .attr({
                'stroke': 'green',
                'stroke-width': __globals.getStrokeWidth().axis,
                'd': __globals.getPathAxisY()
            });
        
        // Create labels for Axis
        (function generateAxisLabels(){
            var origin = __globals.getOrigin();
            var halfScreenWidth = parseFloat(__globals.getScreenDim().screenWidth) / 2;
            var halfScreenHeight = parseFloat(__globals.getScreenDim().screenHeight) / 2;
            var oneVisibleUnit = __globals.getBlockDim().largeBlockDim;
            var displacement = parseFloat(__globals.getBlockDim().smallBlockDim) / 2;
            
            function placeTextElement(x, y, dx, dy, txt){
                var txt = svg.append('text')
                    .attr({
                        'x': x,
                        'y': y,
                        'dx': dx,
                        'dy': dy,
                        'font-size': 7,
                        'font-family': 'courier',
                        'dominant-baseline': 'central',
                        'text-anchor': 'middle'
                    })
                    .text(txt)
                return txt;
            }
            
            // Origin
            lblOrigin = placeTextElement(origin.x, origin.y, displacement, displacement, "0");
            
            // AxisX
            for (var label = oneVisibleUnit; label < halfScreenWidth; label += oneVisibleUnit){
                // Positive
                lblAxisXPositive.push(placeTextElement(origin.x + label, origin.y, displacement, displacement, Math.ceil(label / 100)));
                
                // Negative
                lblAxisXNegative.push(placeTextElement(origin.x - label, origin.y, displacement, displacement, "-" + Math.ceil(label / 100)));
            }
            
            // AxisY
            for (var label = oneVisibleUnit; label < halfScreenHeight; label += oneVisibleUnit){
                // Positive
                lblAxisYPositive.push(placeTextElement(origin.x, origin.y - label, displacement, displacement, Math.ceil(label / 100)));
                  
                // Negative
                lblAxisYNegative.push(placeTextElement(origin.x, origin.y + label, displacement, displacement, "-" + Math.ceil(label / 100)));
            }
        })(); 
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
            
            axisLabels: {
                geLblOrigin: function(){
                    return lblOrigin;
                },
                
                getLblAxisX: function(){
                    return {
                        positive: lblAxisXPositive,
                        negative: lblAxisXNegative
                    }
                },
                
                getLblAxisY: function(){
                    return {
                        positive: lblAxisYPositive,
                        negative: lblAxisYNegative
                    }
                },
                
                getLblsAxis: function(){
                    return {
                        origin: this.getLblOrigin,
                        axisX: this.getLblAxisX,
                        axisY: this.getLblAxisY
                    }
                },
                
                showLbl: function(element){
                      
                },
                
                hideLbl: function(element){
                    if (element === 'o'){
                        this.hideLblOrigin();
                    }
                },
                
                hideLblOrigin: function(){
                    lblOrigin.attr('visibility', 'hidden');
                },
                hideLblAxisX: function(direction){
                    if (typeof direction === 'undefined'){
                        lblAxisXPositive.map(function(value){
                            value.attr('visibility', 'hidden')
                        });
                        lblAxisXNegative.map(function(value){
                            value.attr('visibility', 'hidden')
                        });
                    }
                    else if (direction === '+'){
                        lblAxisXPositive.map(function(value){
                            value.attr('visibility', 'hidden')
                        });
                    }
                    else if (direction === '-'){
                        lblAxisXNegative.map(function(value){
                            value.attr('visibility', 'hidden')
                        });
                    }
                },
                
                hideLblAxisY: function(direction){
                    if (typeof direction === 'undefined'){
                        lblAxisYPositive.map(function(value){
                            value.attr('visibility', 'hidden')
                        });
                        lblAxisYNegative.map(function(value){
                            value.attr('visibility', 'hidden')
                        });
                    }
                    else if (direction === '+'){
                        lblAxisYPositive.map(function(value){
                            value.attr('visibility', 'hidden')
                        });
                    }
                    else if (direction === '-'){
                        lblAxisYNegative.map(function(value){
                            value.attr('visibility', 'hidden')
                        });
                    }
                },
                
                hideLblAxis: function(){
                    axisLabels.hideOrigin();
                    axisLabels.hideLblAxisX();
                    axisLabels.hideLblAxisY()
                }
            }
        }
    };
})();
