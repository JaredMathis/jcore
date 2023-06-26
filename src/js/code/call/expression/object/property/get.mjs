import { metadata } from '../../../../../../metadata.mjs';
import { js_code_call_expression_arguments_2 } from '../../arguments/2.mjs';
import { arguments_assert_todo } from '../../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { object_property_get } from '../../../../../../object/property/get.mjs';
import { function_name_get } from '../../../../../../function/name/get.mjs';
export function js_code_call_expression_object_property_get(identifier_code, property_code) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v = function_name_get(object_property_get);
    let args_additional = [];
    let v_2 = js_code_call_expression_arguments_2(identifier_code, property_code, args_additional, v);
    return v_2;
    metadata([]);
}