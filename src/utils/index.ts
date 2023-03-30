import { debounce } from 'lodash';

export const debouncedFetchData = debounce(async (cb: Function) => {
  cb();
}, 200);

// export const addOn = (a: number, b: number) => a + b;

module.exports = function (a: number, b: number) {
  return a + b;
};
