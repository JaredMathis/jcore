import { js_code_call_expression_with_args_code } from './args/code.mjs';
import { list_join } from '../../../../../list/join.mjs';
export function js_code_call_expression_with_args(call_expression_function_name, params) {
    let params_code2 = list_join(params, ', ');
    const statment_code = js_code_call_expression_with_args_code(call_expression_function_name, params_code2);
    return statment_code;
}