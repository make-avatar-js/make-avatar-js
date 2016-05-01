
'use strict';

var MAJS = MAJS || {};

MAJS.scene = function() {
  this.main = MAJS._draw.rect(MAJS._width * 0.75, MAJS._height);
  this.menu = MAJS._draw.rect(MAJS._width * 0.25, MAJS._height);
};

MAJS.scene.prototype.prepare = function() {
  this.menu.move(MAJS._width * 0.75,0);
  this.menu.style("fill:rgb(230, 230, 230)");
  this.main.style("fill:rgb(242, 242, 242)");
};

MAJS.init = function(params) {

  MAJS.name = "Make Avatar JS";

  MAJS.container = (params["container"] == undefined)? "majs" : params["container"];
  if(!document.getElementById(MAJS.container)){
    throw "the container for MAJS not defined";
  }

  MAJS._width = (params["width"] == undefined)? 350 : params["width"];
  MAJS._height = (params["height"] == undefined)? 250 : params["height"];

  MAJS._draw = SVG(MAJS.container).size(MAJS._width,MAJS._height).spof();

  MAJS._scene = new MAJS.scene();
  MAJS._scene.prepare();

};
