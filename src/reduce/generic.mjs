import { metadata_generated } from '../metadata/generated.mjs';
import { metadata } from '../metadata.mjs';
import { defined_is } from '../defined/is.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function reduce_generic(intialize, then, each_inner) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let current = intialize();
    then(each);
    function each(element) {
        arguments_assert(arguments, [defined_is]);
        current = each_inner(current, element);
    }
    return current;
    metadata([metadata_generated()]);
}