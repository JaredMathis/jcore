import { metadata_generated } from '../../metadata/generated.mjs';
import { metadata } from '../../metadata.mjs';
import { defined_is } from '../../defined/is.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function list_adder_generic(then, lambda) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let list = [];
    then(list_new_then_add);
    function list_new_then_add(element) {
        arguments_assert(arguments, [defined_is]);
        lambda(list, element);
    }
    return list;
    metadata([metadata_generated()]);
}