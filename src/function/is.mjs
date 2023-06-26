import { equal } from '../equal.mjs';
import { assert_arguments_count } from '../assert/arguments/count.mjs';
import { defined_is } from '../defined/is.mjs';
import { error } from '../error.mjs';
import { not } from '../not.mjs';
export function function_is(candidate) {
    assert_arguments_count(arguments, 1);
    let v = not(defined_is(candidate));
    if (v) {
        error('invalid candidate');
    }
    return equal(typeof candidate, 'function');
}