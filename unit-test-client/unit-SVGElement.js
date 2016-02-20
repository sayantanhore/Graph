// Unit test SVGElement.js

describe("SVGElement", function(){
    it ("Creates a valid SVG container", function(){
        var __svgFact = Graph.ui.SVGElement;
        var svg = __svgFact.SVG("#container");
        assert.equal(svg[0][0].nodeName, "svg");
    });
    
    it ("Appends an element to parent SVG", function(){
        var __svgFact = Graph.ui.SVGElement;
        var svg = __svgFact.SVG("#container");
        var circle = __svgFact.attachElement("circle", svg);
        assert.equal(svg[0][0].lastChild.nodeName, "circle");
    });
    
    it ("Sets attributes to elements", function(){
        var __svgFact = Graph.ui.SVGElement;
        var svg = __svgFact.SVG("#container");
        var circle = __svgFact.attachElement("circle", svg);
        __svgFact.setup(circle, {
            r: 100
        });
        assert.equal(circle.attr("r"), 100);
    });
    
    it ("Retrieves an element", function(){
        var __svgFact = Graph.ui.SVGElement;
        var svg = __svgFact.SVG("#container");
        var circle = __svgFact.attachElement("circle", svg);
        var elem = __svgFact.getSVG(circle);
        assert.equal(elem.nodeName, "circle");
    });
    
    it ("Retrieves an element parent", function(){
        var __svgFact = Graph.ui.SVGElement;
        var svg = __svgFact.SVG("#container");
        var circle = __svgFact.attachElement("circle", svg);
        var parent = __svgFact.getParentNode(circle);
        assert.equal(parent, "svg");
    });
    
    it ("Conceals an element", function(){
        var __svgFact = Graph.ui.SVGElement;
        var svg = __svgFact.SVG("#container");
        var circle = __svgFact.attachElement("circle", svg);
        __svgFact.hide(circle);
        assert.equal(circle.attr("visibility"), "hidden");
    });
    
    it ("Reveals an element", function(){
        var __svgFact = Graph.ui.SVGElement;
        var svg = __svgFact.SVG("#container");
        var circle = __svgFact.attachElement("circle", svg);
        __svgFact.show(circle);
        assert.equal(circle.attr("visibility"), "visible");
    });
});
