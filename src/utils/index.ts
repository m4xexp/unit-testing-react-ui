import { debounce } from 'lodash';

export const debouncedFetchData = debounce(async (cb: Function) => {
  cb();
}, 200);
