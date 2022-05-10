"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circulo = exports.trapezio = exports.losango = void 0;
const PI = 3.14;
function losango(D, d) {
    return (D * d) / 2;
}
exports.losango = losango;
function trapezio(B, b, h) {
    return ((B + b) * h);
}
exports.trapezio = trapezio;
function circulo(r) {
    return (PI * (r * r));
}
exports.circulo = circulo;
