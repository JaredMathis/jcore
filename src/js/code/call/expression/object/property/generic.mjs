import { js_code_call_expression_with_args_code } from '../../with/args/code.mjs';
import { js_code_join_comma } from '../../../../join/comma.mjs';
import { list_add_multiple } from '../../../../../../list/add/multiple.mjs';
export function js_code_call_expression_object_property_generic(identifier_code, property_code, args_additional, v) {
    let args = [
        identifier_code,
        property_code
    ];
    list_add_multiple(args, args_additional);
    let args_code = js_code_join_comma(args);
    let after_let = js_code_call_expression_with_args_code(v, args_code);
    return after_let;
}