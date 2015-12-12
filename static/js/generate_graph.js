"use script";

var CreateGraph = {
    svg: null,
    w: null,
    h: null,
    defs: null,
    group: null,
    grid: null,
    createGraph: function(svg, w, h){
        this.svg = svg;
        this.w = w;
        this.h = h;
        this.createDefs();
        this.createPatterns();
        this.createGroup();
        this.createGrid();
        this.addAxis();
        this.generateGraph();
    },
    createDefs: function(){
        this.defs = this.svg.append("defs");
    },
    createPatterns: function(){
        this.defs.append("pattern")
                    .attr({
                        "id": "small_block",
                        "patternUnits": "userSpaceOnUse",
                        "width": 10,
                        "height": 10,
                    })
                    .append("path")
                        .attr({
                            "fill": "none",
                            "stroke": "gray",
                            "stroke-width": "1",
                            "d": "M 10 0 L 0 0 0 10"
                        })
        var large_block = this.defs.append("pattern")
                    .attr({
                        "id": "large_block",
                        "patternUnits": "userSpaceOnUse",
                        "width": 50,
                        "height": 50,
                    });
        large_block.append("rect")
                        .attr({
                            "width": 50,
                            "height": 50,
                            "fill": "url(#small_block)"
                        });
        large_block.append("path")
                        .attr({
                            "fill": "none",
                            "stroke": "gray",
                            "stroke-width": "1.5",
                            "d": "M 50 0 L 0 0 0 50"
                        })
    },
    createGroup: function(svg){
        this.group = this.svg.append("g")
    },
    addAxis: function(){
        this.group.append("path")
            .attr({
                "stroke": "black",
                "stroke-width": "1",
                "d": "M " + 0 + " " + parseFloat(this.h / 2) + " L " +  this.w+ " " + parseFloat(this.h / 2)
            });
        this.group.append("path")
            .attr({
                "stroke": "black",
                "stroke-width": "1",
                "d": "M " + parseFloat(this.w / 2) + " " + 0 + " L " +  parseFloat(this.w / 2)+ " " + this.h
            })
    },
    createGrid: function(){
        this.grid = this.group.append("rect")
        this.grid.attr({
                        "x": 0,
                        "y": 0,
                        "width": this.w,
                        "height": this.h,
                        "stroke": "black",
                        "stroke-width": "2",
                        "fill": "url(#large_block)"
                    });
        var that = this;
        this.grid
            .on("mousedown", function(){
                d3.select(this).style("cursor", "move");
            })
            .on("mouseup", function(){
                d3.select(this).style("cursor", "default");
            })
            .on("mouseover", function(){
                var 
                var mouse_pos = d3.mouse(this);
                if ((that.w - mouse_pos[0]) < 5){
                    d3.select(this).style("cursor", "n-resize");
                }
                if ((mouse_pos[0] < parseFloat(that.w) / 2) && (mouse_pos[1] < parseFloat(that.h) / 2)){
                    
                }
            });
                            
    },
    generateGraph: function(){
        var base = parseFloat(this.h / 2);
        var quarter = parseFloat(this.w / 16);
        
        var path = [];
        var positiveSlope = true;
        for (var i = 0 ; i <= this.w; i += 1){
            var rad = (i / quarter) * parseFloat(Math.PI / 2);
            var amp = base - Math.sin(rad) * base;
            console.log(i + ":::" + amp)
            path.push([i, amp])
        }
        console.log(path);
        this.group.append('path')
            .attr({
                "d": d3.svg.line().interpolate("linear")(path),
                "stroke": "green",
                "stroke-width": 1,
                "fill": "none"
            });
    }
    
}