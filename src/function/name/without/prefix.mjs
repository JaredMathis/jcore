import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { string_prefix_without } from '../../../string/prefix/without.mjs';
import { function_name_get } from '../get.mjs';
export function function_name_without_prefix(fn, prefix) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let fn_name = function_name_get(fn);
    let fn_name_without_prefix = string_prefix_without(fn_name, prefix);
    return fn_name_without_prefix;
    metadata([]);
}