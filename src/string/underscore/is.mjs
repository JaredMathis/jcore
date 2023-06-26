import { metadata } from '../../metadata.mjs';
import { equal } from '../../equal.mjs';
import { string_underscore } from '../underscore.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_is } from '../is.mjs';
export function string_underscore_is(c) {
    arguments_assert(arguments, [string_is]);
    let v = string_underscore();
    let v_2 = equal(c, v);
    return v_2;
    metadata([]);
}