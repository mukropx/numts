"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Numts: () => Numts
});
module.exports = __toCommonJS(src_exports);
var Numts = class {
  constructor() {
  }
  /**
   * array
   */
  array(arr) {
    return arr;
  }
  /**
   * full
   */
  full(shape, fillValue) {
    const [rows, cols] = shape;
    const result = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push(fillValue);
      }
      result.push(row);
    }
    return result;
  }
  /**
   * zero
   */
  zeros(shape) {
    const [rows, cols] = shape;
    const result = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push(0);
      }
      result.push(row);
    }
    return result;
  }
  /**
   * ones
   */
  ones(shape) {
    const [rows, cols] = shape;
    const result = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push(1);
      }
      result.push(row);
    }
    return result;
  }
  /**
   * eyes
   */
  eyes(size) {
    const result = [];
    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < size; j++) {
        row.push(i === j ? 1 : 0);
      }
      result.push(row);
    }
    return result;
  }
  /**
   * random
   */
  random(size) {
    const [rows, cols] = size;
    const result = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push(Math.random());
      }
      result.push(row);
    }
    return result;
  }
  /**
   * clip
   */
  clip(array, min, max) {
    return array.map((value) => Math.min(Math.max(value, min), max));
  }
  /**
   * where
   */
  where(array, condition) {
    const indices = [];
    for (let i = 0; i < array.length; i++) {
      if (condition(array[i])) {
        indices.push(i);
      }
    }
    return indices;
  }
  /**
   * percentile
   */
  percentile(array, percentile) {
    const sortedArray = array.slice().sort((a, b) => a - b);
    const index = percentile / 100 * (sortedArray.length - 1);
    if (Number.isInteger(index)) {
      return sortedArray[index];
    } else {
      const lower = Math.floor(index);
      const upper = Math.ceil(index);
      return (sortedArray[lower] + sortedArray[upper]) / 2;
    }
  }
  /**
   * sliceArrayFromIndex
   */
  sliceIndex(array, startIndex) {
    return array.slice(startIndex);
  }
  /**
   * sliceArrayRange
   */
  sliceArrayRange(array, startIndex, endIndex) {
    return array.slice(startIndex, endIndex);
  }
  /**
   * sliceArrayFromIndexToEnd
   */
  sliceToEnd(array, startIndex) {
    return array.slice(startIndex);
  }
  /**
   * sliceEndToEnd
   */
  sliceEndToEnd(array, startFromEnd, endFromEnd) {
    return array.slice(-startFromEnd, -endFromEnd);
  }
  /**
   * sliceWithStep
   */
  sliceWithStep(array, start, end, step) {
    const result = [];
    for (let i = start; i < end; i += step) {
      result.push(array[i]);
    }
    return result;
  }
  /**
   * selectEvery
   */
  selectEvery(array, step = 2) {
    const result = [];
    for (let i = 0; i < array.length; i += step) {
      result.push(array[i]);
    }
    return result;
  }
  /**
   * sliceFromArray
   */
  sliceFromArray(array, start, end) {
    return array.slice(start, end);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Numts
});
//# sourceMappingURL=index.js.map