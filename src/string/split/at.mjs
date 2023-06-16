import { string_take } from '../take.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_split_at_property_right } from './at/property/right.mjs';
import { string_split_at_property_left } from './at/property/left.mjs';
import { string_skip } from '../skip.mjs';
import { string_is } from '../is.mjs';
import { integer_is } from '../../integer/is.mjs';
export function string_split_at(s, index, offset) {
    arguments_assert(arguments, [
        string_is,
        integer_is,
        integer_is
    ]);
    let left = string_take(s, index);
    let right = string_skip(s, index + offset);
    return {
        [string_split_at_property_left()]: left,
        [string_split_at_property_right()]: right
    };
}