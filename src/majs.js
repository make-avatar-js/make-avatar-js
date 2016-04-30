
'use strict';

var MAJS = MAJS || {};

MAJS.init = function(params) {
  MAJS.name = "Make Avatar JS";
  MAJS.container = (params["container"] == undefined)? "majs" : params["container"];
  if(!document.getElementById(MAJS.container)){
    throw "the container for MAJS not defined";
  }
  MAJS.draw = SVG(MAJS.container).size(350,250).spof();

  MAJS.main = MAJS.draw.rect(250, 250);
  MAJS.main.style("fill:#f2f2f2");

  MAJS.menu = MAJS.draw.rect(100, 250);
  MAJS.menu.move(250,0);
  MAJS.menu.style("fill:#e6e6e6");
};
