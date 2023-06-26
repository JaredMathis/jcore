import { metadata } from '../../../metadata.mjs';
import { add } from '../../../add.mjs';
import { string_take } from '../../take.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_split_at_property_right } from './property/right.mjs';
import { string_split_at_property_left } from './property/left.mjs';
import { string_skip } from '../../skip.mjs';
import { string_is } from '../../is.mjs';
import { integer_is } from '../../../integer/is.mjs';
export function string_split_at_skip(s, index, skip) {
    arguments_assert(arguments, [
        string_is,
        integer_is,
        integer_is
    ]);
    let left = string_take(s, index);
    let v = add(index, skip);
    let right = string_skip(s, v);
    return {
        [string_split_at_property_left()]: left,
        [string_split_at_property_right()]: right
    };
    metadata([]);
}