
'use strict';

var MAJS = MAJS || {};

MAJS.scene = function() {
  this.main = MAJS._draw.rect(MAJS._width * 0.75, MAJS._height);
  this.menu = MAJS._draw.rect(MAJS._width * 0.25, MAJS._height);

  this.menu_btn_top = MAJS._draw.rect(MAJS._width * 0.25, MAJS._height * 0.05);
  this.menu_btn_top_arrow = this.get_triangle(MAJS._width * 0.03, MAJS._height * 0.02);

  this.menu_btn_bottom = MAJS._draw.rect(MAJS._width * 0.25, MAJS._height * 0.05);
  this.menu_btn_bottom_arrow = this.get_triangle(MAJS._width * 0.03, MAJS._height * 0.02, true);

};

MAJS.scene.prototype.prepare = function() {
  this.menu.move(MAJS._width * 0.75,0);
  this.menu.style("fill:rgb(230, 230, 230)");

  this.menu_btn_top.move(MAJS._width * 0.75,0);
  this.menu_btn_top.style("fill:#d9d9d9");

  this.menu_btn_top_arrow.move(
    (MAJS._width * 0.75) + (this.menu_btn_top.width()/2) - (this.menu_btn_top_arrow.width()/2),
    (this.menu_btn_top.height()/2) - (this.menu_btn_top_arrow.height()/2)
  );
  this.menu_btn_top_arrow.style("fill:#a6a6a6");

  this.menu_btn_bottom.move(MAJS._width * 0.75, MAJS._height - (MAJS._height * 0.05));
  this.menu_btn_bottom.style("fill:#d9d9d9");

  this.menu_btn_bottom_arrow.move(
    (MAJS._width * 0.75) + (this.menu_btn_bottom.width()/2) - (this.menu_btn_bottom_arrow.width()/2),
    MAJS._height - ((this.menu_btn_bottom.height()/2) + (this.menu_btn_bottom_arrow.height()/2))
  );
  this.menu_btn_bottom_arrow.style("fill:#a6a6a6");

  this.main.style("fill:rgb(242, 242, 242)");

};

MAJS.scene.prototype.get_triangle = function(w,h,invert) {
  if(invert == undefined || invert == false) {
      return MAJS._draw.polygon( (w/2) + ',0 '+w+','+h+' 0,'+h).fill('none').stroke({ width: 0 });
  }
  return MAJS._draw.polygon('0,0 '+w+',0 '+(w/2)+','+h).fill('none').stroke({ width: 0 });
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
