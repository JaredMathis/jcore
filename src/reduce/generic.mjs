import { metadata_generated } from '../metadata/generated.mjs';
import { metadata } from '../metadata.mjs';
import { defined_is } from '../defined/is.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function reduce_generic(intialize, each_inner, then) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let current = intialize();
    then(each);
    function each(element) {
        arguments_assert(arguments, [defined_is]);
        console.log({before:current})
        current = each_inner(current, element);
        console.log({after:current})
    }
    return current;
    metadata([metadata_generated()]);
}