declare class Numts {
    constructor();
    /**
     * array
     */
    array(arr: number[]): number[];
    /**
     * full
     */
    full(shape: [number, number], fillValue: number): number[][];
    /**
     * zero
     */
    zeros(shape: [number, number]): number[][];
    /**
     * ones
     */
    ones(shape: [number, number]): number[][];
    /**
     * eyes
     */
    eyes(size: number): number[][];
    /**
     * random
     */
    random(size: [number, number]): number[][];
    /**
     * clip
     */
    clip(array: number[], min: number, max: number): number[];
    /**
     * where
     */
    where(array: number[], condition: (value: number) => boolean): number[];
    /**
     * percentile
     */
    percentile(array: number[], percentile: number): number;
    /**
     * sliceArrayFromIndex
     */
    sliceIndex(array: number[], startIndex: number): number[];
    /**
     * sliceArrayRange
     */
    sliceArrayRange(array: number[], startIndex: number, endIndex: number): number[];
    /**
     * sliceArrayFromIndexToEnd
     */
    sliceToEnd(array: number[], startIndex: number): number[];
    /**
     * sliceEndToEnd
     */
    sliceEndToEnd(array: number[], startFromEnd: number, endFromEnd: number): number[];
    /**
     * sliceWithStep
     */
    sliceWithStep(array: number[], start: number, end: number, step: number): number[];
    /**
     * selectEvery
     */
    selectEvery(array: number[], step?: number): number[];
    /**
     * sliceFromArray
     */
    sliceFromArray(array: number[], start: number, end: number): number[];
}

export { Numts };
