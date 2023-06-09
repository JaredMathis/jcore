import { equal } from '../equal.mjs';
import { not } from '../not.mjs';
import { metadata } from '../metadata.mjs';
import { defined_is } from '../defined/is.mjs';
import { assert_arguments_count } from '../assert/arguments/count.mjs';
import { error } from '../error.mjs';
export function string_is(value) {
    assert_arguments_count(arguments, 1);
    let v = not(defined_is(value));
    if (v) {
        error('invalid value');
    }
    return equal(typeof value, 'string');
    metadata([]);
}