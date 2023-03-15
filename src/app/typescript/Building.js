"use strict";
exports.__esModule = true;
exports.Hospital = exports.Tower = exports.Building = void 0;
var Building = /** @class */ (function () {
    function Building() {
    }
    Building.prototype.build = function (buildingType) {
        console.log(typeof buildingType);
    };
    return Building;
}());
exports.Building = Building;
var Tower = /** @class */ (function () {
    function Tower() {
    }
    return Tower;
}());
exports.Tower = Tower;
var Hospital = /** @class */ (function () {
    function Hospital() {
    }
    return Hospital;
}());
exports.Hospital = Hospital;
var b = new Building();
b.build(new Hospital());
var c = new Building();
c.build(new Hospital());
