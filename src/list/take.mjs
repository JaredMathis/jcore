import { list_slice } from './slice.mjs';
export function list_take(list, count) {
    return list_slice(list, 0, count);
}