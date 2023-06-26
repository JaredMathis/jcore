import { js_code_call_expression_with_args_code } from './with/args/code.mjs';
import { js_bracket_both } from '../../../bracket/both.mjs';
import { metadata } from '../../../../metadata.mjs';
import { function_name_get } from '../../../../function/name/get.mjs';
export function js_code_call_expression_metadata() {
    const name = function_name_get(metadata);
    const call_args = js_bracket_both();
    let metadata_new_code = js_code_call_expression_with_args_code(name, call_args);
    return metadata_new_code;
}