"use strict";

var Graph = Graph || {};

Graph.ui = Graph.ui || {};

Graph.ui.Grid = (function(__svgFact, __component, __globals){
    var containerDim = {};
    var blockDim = {};
    var compObj = Object.create(__component);
    
    function setContainerDim(container){
        containerDim.width = $(container).width();
        containerDim.height = $(container).height();
    };
    
    function setBlockDim(container){
        blockDim.small = parseFloat(containerDim.width / __globals.getBlockDimFactor().small);
        blockDim.large = parseFloat(containerDim.width / __globals.getBlockDimFactor().large);
    };
    
    function createDefs(appendTo){
        var defs = __svgFact.attachElement("defs", appendTo);
        return defs;
    };
    
    function createPatternsSmallBlock(appendTo){
        var smallBlock = __svgFact.attachElement("pattern", appendTo, {
            'id': 'small_block',
            'patternUnits': 'userSpaceOnUse',
            'width': blockDim.small,
            'height': blockDim.small
        });
        
        var smallBlockPath = __svgFact.attachElement("path", smallBlock, {
            'fill': 'none',
            'stroke': 'green',
            'stroke-width': __globals.getStrokeWidth().smallBlock,
            'd': __globals.createPathString(blockDim.small)
        });
    };
    
    function createPatternsLargeBlock(appendTo){
        var largeBlock = __svgFact.attachElement("pattern", appendTo, {
            'id': 'large_block',
            'patternUnits': 'userSpaceOnUse',
            'width': blockDim.large,
            'height': blockDim.large
        });
        
        var largeBlockUnitCover = __svgFact.attachElement("rect", largeBlock, {
            'width': blockDim.large,
            'height': blockDim.large,
            'fill': 'url(#small_block)'
        });
        
        var largeBlockPath = __svgFact.attachElement("path", largeBlock, {
            'fill': 'none',
            'stroke': 'green',
            'stroke-width': __globals.getStrokeWidth().largeBlock,
            'd': __globals.createPathString(blockDim.large)
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
        setBlockDim(appendTo);
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
