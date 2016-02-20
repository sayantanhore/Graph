"use strict";

var Graph = Graph || {};

Graph.ui = Graph.ui || {};

Graph.ui.Component = (function(__svgFact){
    return {
        component: null,
        getComponent: function(){
            return this.component;
        },
        setComponent: function(enclosingElement){
            this.component = enclosingElement;
        },
        show: function(){
            __svgFact.show(this.getComponent());
        },
        hide: function(){
            __svgFact.hide(this.getComponent());
        }
    }
})(Graph.ui.SVGElement);