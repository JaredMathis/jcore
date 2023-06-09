import { metadata } from '../../../../metadata.mjs';
import { boolean_is } from '../../../../boolean/is.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { function_add_string } from '../../string.mjs';
import { js_identifier_combine } from '../../../../js/identifier/combine.mjs';
import { function_exists } from '../../../exists.mjs';
export async function function_add_string_prefix_generic(prefix, suffix, value, only_if_needed) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        boolean_is
    ]);
    let function_name = js_identifier_combine(prefix, suffix);
    let v = !only_if_needed;
    if (v) {
        let v_2 = await function_exists(function_name);
        if (v_2) {
            return null;
        }
    }
    await function_add_string(function_name, value);
    return function_name;
    metadata([]);
}