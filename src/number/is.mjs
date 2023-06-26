import { equal } from '../equal.mjs';
import { assert_arguments_count } from '../assert/arguments/count.mjs';
import { metadata } from '../metadata.mjs';
export function number_is(value) {
    assert_arguments_count(arguments, 1);
    return equal(typeof value, 'number');
    metadata([]);
}