import { object_property_get } from '../../../../../../object/property/get.mjs';
import { function_name_get } from '../../../../../../function/name/get.mjs';
import { js_code_call_expression_with_args_code } from '../../with/args/code.mjs';
import { js_code_join_comma } from '../../../../join/comma.mjs';
export function js_code_call_expression_object_property_get(identifier_code, property_code) {
    let args = [
        identifier_code,
        property_code
    ];
    let args_code = js_code_join_comma(args);
    let v = function_name_get(object_property_get);
    let after_let = js_code_call_expression_with_args_code(v, args_code);
    return after_let;
}