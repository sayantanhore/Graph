"use strict";

function __init(container){
    if (!Graph.ui.Grid){
        console.log("Grid did not load properly");
    }
    var grid = Object.create(Graph.ui.Grid);
    grid.init(container);
};