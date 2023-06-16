import { assert_arguments_count } from '../assert/arguments/count.mjs';
export function defined_is(variable) {
    assert_arguments_count(arguments, 1);
    return typeof variable !== 'undefined';
}