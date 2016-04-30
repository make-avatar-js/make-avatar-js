
'use strict';

var MAJS = MAJS || {};

MAJS.init = function(params) {
  MAJS.name = "Make Avatar JS";
  MAJS.container = (params["container"] == undefined)? "majs" : params["container"];
  if(!document.getElementById(MAJS.container)){
    throw "the container for MAJS not defined";
  }
};
