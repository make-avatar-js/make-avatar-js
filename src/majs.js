
'use strict';

var MAJS = MAJS || {};

MAJS.materials = {
  faces : [
    'M61.44,45h0a25.88,25.88,0,0,0,.78-6.46c0-13.81-10.58-25.14-22.5-25.1-12.43,0-22.5,11.53-22.5,25.34A31.22,31.22,0,0,0,18.42,47h0l0-.1c0.18,0.57.36,1,.57,1.59L22.77,59.4a11.36,11.36,0,0,0,2.78,4.68l9.06,9.12A5.72,5.72,0,0,0,38.44,75h3.89a5.54,5.54,0,0,0,4-2l9.5-10.88A8,8,0,0,0,57.44,59l3.35-11.52c0.24-.71.45-1.56,0.63-2.29Z',
    'M115.11,47.44c0-1.93,0-2.94,0-2.94h0c0-2-.1-3.76-0.11-5.6,0-13.81-10.58-25.32-22.5-25.28C80,13.66,70,24.9,70,38.71c0,1.84-.24,3.6-0.28,5.32L69.5,44h0a41.24,41.24,0,0,0,.73,9.1c0.55,4.72,1.74,10,3.94,12.57,0,0,7,8.82,13.83,8.82H99.25c6-1,12-9.46,12-9.46,2.6-3.44,3.48-10.11,3.76-15C115.07,49.13,115.11,48.36,115.11,47.44Z',
    'M167.89,38.65c0-13.81-10.58-25.2-22.5-25.16-12.43,0-22.5,11.26-22.5,25.07,0,4.47-.34,7.94.08,10.94h0s0,0.25.07,0.55c0,0.06,0,.17,0,0.24s0.06,0.33.11,0.51,0,0.15,0,.22a33.07,33.07,0,0,0,5.15,10.71s4.73,6.52,11.92,7.68a7.82,7.82,0,0,0,1.24.09h8.9a8.09,8.09,0,0,0,3.91-1c4.71-2.59,9-7.76,9-7.76a19.71,19.71,0,0,0,4.06-9.31h0C168.4,48.32,167.9,44.09,167.89,38.65Z',
    'M272.77,45.5h0a27.94,27.94,0,0,0,.78-6.71c0-13.81-10.58-25.27-22.5-25.23-12.43,0-22.5,11.22-22.5,25a24.08,24.08,0,0,0,1.2,7.91h0l0,0.15c0.18,0.57.36,1.17,0.57,1.72l3.47,10.11a8.9,8.9,0,0,0,.76,1.65c6.11,10.26,12.44,18.43,11.38,16.8a5.47,5.47,0,0,0,3.83,1.57h3.89a5.28,5.28,0,0,0,4-1.78s7.32-9.74,11-17.51a3.82,3.82,0,0,0,.22-0.58l3.26-11.19c0.24-.71.45-1.29,0.63-2Z',
    'M220.83,48.73c0.24-2.74,0-6.08,0-10.09,0-13.81-10.58-25.2-22.5-25.16-12.43,0-22.5,11.36-22.5,25.17,0,3.41-.2,5.84-0.11,8.84h0s-0.07,2.3,1.06,12.44A7.79,7.79,0,0,0,182,66.46c3.12,1.06,12.11,4,12.48,4h8.9c2,0,9.19-3.57,12.42-4.39A6.61,6.61,0,0,0,220.56,60c0.38-7.14.37-11.25,0.37-11.25h-0.1Z'
  ]
};

MAJS.scene = function() {
  this.main = MAJS._draw.rect(MAJS._width * 0.75, MAJS._height);
  this.menu = MAJS._draw.rect(MAJS._width * 0.25, MAJS._height);

  this.menu_btn_top = MAJS._draw.rect(MAJS._width * 0.25, MAJS._height * 0.05);
  this.menu_btn_top_arrow = this.get_triangle(MAJS._width * 0.03, MAJS._height * 0.02);

  this.menu_btn_bottom = MAJS._draw.rect(MAJS._width * 0.25, MAJS._height * 0.05);
  this.menu_btn_bottom_arrow = this.get_triangle(MAJS._width * 0.03, MAJS._height * 0.02, true);
};

MAJS.scene.prototype.prepare = function() {
  /* menu */
  this.menu.move(MAJS._width * 0.75,0);
  this.menu.style("fill:rgb(230, 230, 230)");

  /* menu button TOP and arrow */
  this.menu_btn_top.move(MAJS._width * 0.75,0);
  this.menu_btn_top.style("fill:#d9d9d9");
  this.menu_btn_top_arrow.move(
    (MAJS._width * 0.75) + (this.menu_btn_top.width()/2) - (this.menu_btn_top_arrow.width()/2),
    (this.menu_btn_top.height()/2) - (this.menu_btn_top_arrow.height()/2)
  );
  this.menu_btn_top_arrow.style("fill:#a6a6a6");

  /* menu button BOTTOM and arrow */
  this.menu_btn_bottom.move(MAJS._width * 0.75, MAJS._height - (MAJS._height * 0.05));
  this.menu_btn_bottom.style("fill:#d9d9d9");
  this.menu_btn_bottom_arrow.move(
    (MAJS._width * 0.75) + (this.menu_btn_bottom.width()/2) - (this.menu_btn_bottom_arrow.width()/2),
    MAJS._height - ((this.menu_btn_bottom.height()/2) + (this.menu_btn_bottom_arrow.height()/2))
  );
  this.menu_btn_bottom_arrow.style("fill:#a6a6a6");

  /* set style for main */
  this.main.style("fill:rgb(242, 242, 242)");

  /* show faces */
  this.show_faces();
};

MAJS.scene.prototype.show_faces = function() {
  var face = MAJS._draw.path(MAJS.materials["faces"][0]);
  face.style("fill:transparent;stroke:#808080");
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
