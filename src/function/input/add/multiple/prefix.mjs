import { metadata } from '../../../../metadata.mjs';
import { js_identifier_parts_from } from '../../../../js/identifier/parts/from.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { function_input_add_multiple_generic } from './generic.mjs';
export async function function_input_add_multiple_prefix(function_name, prefix, inputs_string) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let result = await function_input_add_multiple_generic(function_name, inputs_string, map);
    return result;
    function map(i) {
        let v_2 = [
            prefix,
            i
        ];
        let v = js_identifier_parts_from(v_2);
        return v;
    }
    metadata([]);
}