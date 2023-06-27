import { boolean_value_false } from '../boolean/value/false.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function value_new() {
    arguments_assert(arguments, []);
    let v = boolean_value_false();
    return {
        value: undefined,
        set: v
    };
    metadata([]);
}