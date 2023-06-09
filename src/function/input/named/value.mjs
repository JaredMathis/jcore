import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { function_name_get } from '../../name/get.mjs';
import { js_code_identifier_value } from '../../../js/code/identifier/value.mjs';
import { function_input_add_type } from '../add/type.mjs';
export async function function_input_named_value(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v = js_code_identifier_value();
    let v_2 = function_name_get(defined_is);
    await function_input_add_type(function_name, v, v_2);
    metadata([]);
}