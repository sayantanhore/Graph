"use strict";

var Graph = Graph || {};

Graph.ui = Graph.ui || {};

Graph.ui.SVGElement = (function(d3){
    function createSVGContainer(container){
        var svg = d3.select(container).append('svg')
            .attr({
                x: 0,
                y: 0,
                width: $(container).width(),
                height: $(container).height()
            });
            
        return svg;
    };
    
    function setup(element, attrs){
        element.attr(attrs);
    };
    
    function attachElement(elementType, appendTo, attrs){
        var element = appendTo.append(elementType);
        if (attrs){
            setup(element, attrs);
        }
        return element;
    };
    
    function show(element){
        element.attr('visibility', 'visible');
    };
    
    function hide(element){
        element.attr('visibility', 'hidden');
    };
    
    function getSVG(element){
        return element[0][0];
    };
    
    function getParentNode(element){
        return element[0][0].parentNode.nodeName;
    };
    
    return {
        SVG: createSVGContainer,
        setup: setup,
        attachElement: attachElement,
        getSVG: getSVG,
        getParentNode: getParentNode,
        show: show,
        hide: hide
    }
})(d3);
