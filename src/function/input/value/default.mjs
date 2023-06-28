import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { error } from '../../../error.mjs';
import { function_name_get } from '../../name/get.mjs';
import { js_code_call_expression } from '../../../js/code/call/expression.mjs';
export function function_input_value_default() {
    arguments_assert(arguments, []);
    let v = function_name_get(error);
    let v_2 = js_code_call_expression(v);
    return v_2;
    metadata([]);
}