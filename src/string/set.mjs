import { metadata } from '../metadata.mjs';
import { add } from '../add.mjs';
import { integer_value_1 } from '../integer/value/1.mjs';
import { string_combine_multiple } from './combine/multiple.mjs';
import { character_is } from '../character/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { string_is } from './is.mjs';
import { integer_is } from '../integer/is.mjs';
import { string_take } from './take.mjs';
import { string_skip } from './skip.mjs';
export function string_set(input, index, value) {
    arguments_assert(arguments, [
        string_is,
        integer_is,
        character_is
    ]);
    let v_4 = integer_value_1();
    let v_3 = add(index, v_4);
    let v_2 = [
        string_take(input, index),
        value,
        string_skip(input, v_3)
    ];
    let v = string_combine_multiple(v_2);
    return v;
    metadata([]);
}