import { function_is } from '../../../function/is.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_identifier_parts_from } from './from.mjs';
import { js_identifier_parts_to } from './to.mjs';
export function js_identifier_parts_map(function_name_old, map) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        function_is
    ]);
    let parts = js_identifier_parts_to(function_name_old);
    map(parts);
    let function_name_new = js_identifier_parts_from(parts);
    return function_name_new;
    metadata([]);
}