import { metadata } from '../../../metadata.mjs';
import { list_elements_all_equal_generic } from './equal/generic.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { equal } from '../../../equal.mjs';
export function list_elements_all_equal(values) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let lambda = equal;
    let v = list_elements_all_equal_generic(lambda, values);
    return v;
    metadata([]);
}