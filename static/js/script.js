"use strict";

function removeUnit(f){
    return f.replace("px", "")
}

$(document).ready(function(){
    var x = 0;
    var myObj = {
        x: 1,
        add: function(y){
                var that = this;
                function addition(y){
                    return (this.x + y);
                }
                return addition(y);
        }
    }

    console.log(myObj.add(2))
    
    
    $("#display").append($("<div></div>").addClass("viewport")
                                        .on("mousedown", function(e){
                                            var left = parseFloat(removeUnit($(this).css("left")));
                                            console.log(left);
                                            var top = parseFloat(removeUnit($(this).css("top")));
                                            console.log(top);
                                            console.log("Hello 2")
                                            var offset_x = e.pageX - left;
                                            var offset_y = e.pageY - top;
                                            $(this).parent().data("offset", [offset_x, offset_y]);
                                            $(this).parent().data("dragging", true);
                                            
                                        })
                                        .on("mousemove", function(e){
                                            var parent = $(this).parent();
                                            if ((parent.data("offset") !== undefined) && (parent.data("dragging") === true)){
                                                var offset_x = parent.data("offset")[0];
                                                var offset_y = parent.data("offset")[1];
                                                console.log(offset_x)
                                                console.log(offset_y)
                                                
                                                var left = e.pageX -  offset_x;
                                                var top = e.pageY -  offset_y;
                                                
                                                $(this).css("left", left + "px");
                                                $(this).css("top", top + "px");
                                            }  
                                        })
                                        .on("mouseup", function(){
                                            $(this).parent().data("offset", []);
                                            $(this).parent().data("dragging", false);
                                        })
                        );
    init();
});


function init(){
    $("#display div.viewport").css("left", function(){
        return parseFloat((removeUnit($(this).parent().css("width")) - removeUnit(($(this).css("width")))) / 2) + "px";
    });
    $("#display div.viewport").css("top", function(){
        return parseFloat((removeUnit($(this).parent().css("height")) - removeUnit(($(this).css("height")))) / 2) + "px";
    });
    var viewport = d3.select("#display div.viewport").node().getBoundingClientRect();
    var w = viewport.width;
    var h = viewport.height;

    console.log(w);
    console.log(h);
    
    var svgContainer = d3.select("#display div.viewport").append("svg")
                            .attr("width", w)
                            .attr("height", h)
                            .attr("viewBox", "0 0 " + w + " " + h )
                            
    
    CreateGraph.createGraph(svgContainer, w, h);
    
}