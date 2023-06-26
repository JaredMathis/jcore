import { metadata } from '../metadata.mjs';
import { string_combine } from './combine.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { string_is } from './is.mjs';
import { integer_is } from '../integer/is.mjs';
import { string_empty } from './empty.mjs';
import { range } from '../range.mjs';
export function string_multiply(s, times) {
    arguments_assert(arguments, [
        string_is,
        integer_is
    ]);
    let result = string_empty();
    for (let i of range(times)) {
        result = string_combine(result, s);
    }
    return result;
    metadata([]);
}