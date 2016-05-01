
'use strict';

var MAJS = MAJS || {};

MAJS.scene = function() {
  this.main = MAJS._draw.rect(250, 250);
  this.menu = MAJS._draw.rect(100, 250);
};

MAJS.scene.prototype.prepare = function() {
  this.menu.move(250,0);
  this.menu.style("fill:rgb(230, 230, 230)");
  this.main.style("fill:rgb(242, 242, 242)");
};

MAJS.init = function(params) {

  MAJS.name = "Make Avatar JS";

  MAJS.container = (params["container"] == undefined)? "majs" : params["container"];
  if(!document.getElementById(MAJS.container)){
    throw "the container for MAJS not defined";
  }

  MAJS._draw = SVG(MAJS.container).size(350,250).spof();

  MAJS._scene = new MAJS.scene();
  MAJS._scene.prepare();

};
