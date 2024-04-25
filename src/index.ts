class Numts {
  constructor() {}
  /**
   * array
   */
  public array(arr: number[]) {
    return arr;
  }

  /**
   * full
   */
  public full(shape: [number, number], fillValue: number): number[][] {
    const [rows, cols] = shape;
    const result: number[][] = [];

    for (let i = 0; i < rows; i++) {
      const row: number[] = [];
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
  public zeros(shape: [number, number]): number[][] {
    const [rows, cols] = shape;
    const result: number[][] = [];

    for (let i = 0; i < rows; i++) {
      const row: number[] = [];
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
  public ones(shape: [number, number]): number[][] {
    const [rows, cols] = shape;
    const result: number[][] = [];

    for (let i = 0; i < rows; i++) {
      const row: number[] = [];
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
  public eyes(size: number): number[][] {
    const result: number[][] = [];

    for (let i = 0; i < size; i++) {
      const row: number[] = [];
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
  public random(size: [number, number]): number[][] {
    const [rows, cols] = size;
    const result: number[][] = [];

    for (let i = 0; i < rows; i++) {
      const row: number[] = [];
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
  public clip(array: number[], min: number, max: number): number[] {
    return array.map((value) => Math.min(Math.max(value, min), max));
  }

  /**
   * where
   */
  public where(
    array: number[],
    condition: (value: number) => boolean
  ): number[] {
    const indices: number[] = [];
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
  public percentile(array: number[], percentile: number): number {
    const sortedArray = array.slice().sort((a, b) => a - b);
    const index = (percentile / 100) * (sortedArray.length - 1);
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
  public sliceIndex(array: number[], startIndex: number): number[] {
    return array.slice(startIndex);
  }

  /**
   * sliceArrayRange
   */
  public sliceArrayRange(
    array: number[],
    startIndex: number,
    endIndex: number
  ): number[] {
    return array.slice(startIndex, endIndex);
  }

  /**
   * sliceArrayFromIndexToEnd
   */
  public sliceToEnd(array: number[], startIndex: number): number[] {
    return array.slice(startIndex);
  }

  /**
   * sliceEndToEnd
   */
  public sliceEndToEnd(
    array: number[],
    startFromEnd: number,
    endFromEnd: number
  ): number[] {
    return array.slice(-startFromEnd, -endFromEnd);
  }

  /**
   * sliceWithStep
   */
  public sliceWithStep(
    array: number[],
    start: number,
    end: number,
    step: number
  ): number[] {
    const result: number[] = [];
    for (let i = start; i < end; i += step) {
      result.push(array[i]);
    }
    return result;
  }

  /**
   * selectEvery
   */
  public selectEvery(array: number[], step: number = 2): number[] {
    const result: number[] = [];
    for (let i = 0; i < array.length; i += step) {
      result.push(array[i]);
    }
    return result;
  }

  /**
   * sliceFromArray
   */
  public sliceFromArray(array: number[], start: number, end: number): number[] {
    return array.slice(start, end);
  }
}

export { Numts };
