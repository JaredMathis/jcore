import { js_code_call_expression_with_args_code } from '../../with/args/code.mjs';
import { js_code_join_comma } from '../../../../join/comma.mjs';
import { list_add_multiple } from '../../../../../../list/add/multiple.mjs';
export function js_code_call_expression_object_property_generic(code_argument_1, code_argument_2, args_additional, v) {
    let args = [
        code_argument_1,
        code_argument_2
    ];
    list_add_multiple(args, args_additional);
    let args_code = js_code_join_comma(args);
    let after_let = js_code_call_expression_with_args_code(v, args_code);
    return after_let;
}