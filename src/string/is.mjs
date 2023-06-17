import { metadata } from '../metadata.mjs';
import { defined_is } from '../defined/is.mjs';
import { assert_arguments_count } from '../assert/arguments/count.mjs';
import { error } from '../error.mjs';
export function string_is(value) {
    assert_arguments_count(arguments, 1);
    if (!(defined_is(value))) {
        error('invalid value');
    }
    return typeof value === 'string';
    metadata([]);
}