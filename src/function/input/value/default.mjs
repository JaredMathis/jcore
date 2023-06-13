import { error } from '../../../error.mjs';
import { function_name_get } from '../../name/get.mjs';
import { js_code_call_expression } from '../../../js/code/call/expression.mjs';
export function function_input_value_default() {
    return js_code_call_expression(function_name_get(error));
}