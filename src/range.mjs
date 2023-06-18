import { number_is } from './number/is.mjs';
import { assert_arguments_count } from './assert/arguments/count.mjs';
import { metadata } from './metadata.mjs';
import { assert } from './assert.mjs';
export function range(count) {
    assert_arguments_count(arguments, 1);
    let v = number_is(count);
    assert(v);
    let result = [];
    for (let i = 0; i < count; i++) {
        result.push(i);
    }
    return result;
    metadata([]);
}