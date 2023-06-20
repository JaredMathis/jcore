import { js_code_call_expression_object_property_generic } from './generic.mjs';
import { function_name_get } from '../../../../../../function/name/get.mjs';
import { arguments_assert_todo } from '../../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { object_property_set } from '../../../../../../object/property/set.mjs';
export function js_code_call_expression_object_property_set(identifier_code, property_code, value_code) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v = function_name_get(object_property_set);
    let args_additional = [value_code];
    let v_2 = js_code_call_expression_object_property_generic(identifier_code, property_code, args_additional, v);
    return v_2;
}