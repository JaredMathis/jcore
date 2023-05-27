import { array_add } from './array/add.mjs'

export function range(count) {
    let result = [];
    for (let i = 0; i < count; i++) {
        array_add(result, i);
    }
    return result;
}