import { number_is } from './number/is.mjs';
import { assert_arguments_count } from './assert/arguments/count.mjs';
import { metadata } from './metadata.mjs';
import { list_add } from './list/add.mjs';
import { assert } from './assert.mjs';
export function range(count) {
    assert_arguments_count(arguments, 1);
    assert(number_is(count));
    let result = [];
    for (let i = 0; i < count; i++) {
        list_add(result, i);
    }
    return result;
    metadata([]);
}