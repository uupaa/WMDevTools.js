(function(global) {
"use strict";

// --- dependency modules ----------------------------------
// --- define / local variables ----------------------------
//var _runOnNode = "process" in global;
//var _runOnWorker = "WorkerLocation" in global;
//var _runOnBrowser = "document" in global;

// --- class / interfaces ----------------------------------
function WMDevelop(value) { // @arg Number|Integer = 0 comment
//{@dev
  //$args(WMDevelop, arguments);
  //$valid($type(value, "Number|Integer|omit"), WMDevelop, "value");
//}@dev

    this._value = value || 0;
}

//{@dev
WMDevelop["repository"] = "https://github.com/uupaa/WMDevelop.js"; // GitHub repository URL. http://git.io/Help
//}@dev

WMDevelop["prototype"] = {
    "constructor":  WMDevelop,           // new WMDevelop(value:Number|Integer):WMDevelop
    "value":        WMDevelop_value,     // WMDevelop#value():Number|Integer
    "isNumber":     WMDevelop_isNumber,  // WMDevelop#isNumber():Boolean
    "isInteger":    WMDevelop_isInteger  // WMDevelop#isInteger():Boolean
};

/*
class Xyz extends WMDevelop { ... }

Xyz["prototype"] = Object.create(WMDevelop.prototype, {
    "constructor":  { "value": Xyz },
    "value":        { "value": Xyz_value },
    "isNumber":     { "value": Xyz_isNumber },
    "isInteger":    { "value": Xyz_isInteger },
});
 */

// --- implements ------------------------------------------
function WMDevelop_value() { // @ret Number|Integer comment
    return this._value;
}

function WMDevelop_isNumber() { // @ret Boolean comment
    return typeof this._value === "number";
}

function WMDevelop_isInteger() { // @ret Boolean comment
    return typeof this._value === "number" &&
           Math.ceil(this._value) === this._value;
}

// --- validate / assertions -------------------------------
//{@dev
//function $valid(val, fn, hint) { if (global["Valid"]) { global["Valid"](val, fn, hint); } }
//function $type(obj, type) { return global["Valid"] ? global["Valid"].type(obj, type) : true; }
//function $keys(obj, str) { return global["Valid"] ? global["Valid"].keys(obj, str) : true; }
//function $some(val, str, ignore) { return global["Valid"] ? global["Valid"].some(val, str, ignore) : true; }
//function $args(fn, args) { if (global["Valid"]) { global["Valid"].args(fn, args); } }
//}@dev

// --- exports ---------------------------------------------
if ("process" in global) {
    module["exports"] = WMDevelop;
}
global["WMDevelop" in global ? "WMDevelop_" : "WMDevelop"] = WMDevelop; // switch module. http://git.io/Minify

})((this || 0).self || global); // WebModule idiom. http://git.io/WebModule

