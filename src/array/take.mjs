import { array_slice } from './slice.mjs';
export function array_take(list, count) {
    return array_slice(list, 0, count);
}