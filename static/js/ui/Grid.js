"use strict";

var Graph = Graph || {};

Graph.ui = Graph.ui || {};

Graph.ui.Grid = (function(__svgFact, __component, __globals){
    var containerDim = {};
    var compObj = Object.create(__component);
    
    function setContainerDim(container){
        containerDim.width = $(container).width();
        containerDim.height = $(container).height();
    };
    
    function createDefs(appendTo){
        var defs = __svgFact.attachElement("defs", appendTo);
        return defs;
    };
    
    function createPatternsSmallBlock(appendTo){
        var smallBlock = __svgFact.attachElement("pattern", appendTo, {
            'id': 'small_block',
            'patternUnits': 'userSpaceOnUse',
            'width': __globals.getBlockDim().smallBlockDim,
            'height': __globals.getBlockDim().smallBlockDim
        });
        
        var smallBlockPath = __svgFact.attachElement("path", smallBlock, {
            'fill': 'none',
            'stroke': 'green',
            'stroke-width': __globals.getStrokeWidth().smallBlock,
            'd': __globals.createPathString(__globals.getBlockDim().smallBlockDim)
        });
    };
    
    function createPatternsLargeBlock(appendTo){
        var largeBlock = __svgFact.attachElement("pattern", appendTo, {
            'id': 'large_block',
            'patternUnits': 'userSpaceOnUse',
            'width': __globals.getBlockDim().largeBlockDim,
            'height': __globals.getBlockDim().largeBlockDim
        });
        
        var largeBlockUnitCover = __svgFact.attachElement("rect", largeBlock, {
            'width': __globals.getBlockDim().largeBlockDim,
            'height': __globals.getBlockDim().largeBlockDim,
            'fill': 'url(#small_block)'
        });
        
        var largeBlockPath = __svgFact.attachElement("path", largeBlock, {
            'fill': 'none',
            'stroke': 'green',
            'stroke-width': __globals.getStrokeWidth().largeBlock,
            'd': __globals.createPathString(__globals.getBlockDim().largeBlockDim)
        })
    };
    
    function createPatterns(appendTo){
        createPatternsSmallBlock(appendTo);
        createPatternsLargeBlock(appendTo);
    };
    
    function createGrid(appendTo){
        var grid = __svgFact.attachElement("rect", appendTo, {
                'x': 0,
                'y': 0,
                'width': containerDim.width,
                'height': containerDim.height,
                'stroke': 'black',
                'stroke-width': __globals.getStrokeWidth().grid,
                'fill': 'url(#large_block)'
            });
        return grid;
    };
    
    function createSVGContainer(container){
        return __svgFact.SVG(container);
    }
    
    function init(appendTo){
        setContainerDim(appendTo);
        var svgContainer = createSVGContainer(appendTo);
        var defs = createDefs(svgContainer);
        var rect = svgContainer.append('rect')
        createPatterns(defs);
        compObj.setComponent(createGrid(svgContainer));
    };
    
    function getEnclosingElement(){
        return enclosingElement;
    };
    
    compObj.init = init;
    compObj.getEnclosingElement = getEnclosingElement;
    
    return compObj;
})(Graph.ui.SVGElement, Graph.ui.Component, Graph.globals);
