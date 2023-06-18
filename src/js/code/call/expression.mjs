import { string_is } from '../../../string/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_code_call_expression_with_args_code } from './expression/with/args/code.mjs';
export function js_code_call_expression(name) {
    arguments_assert(arguments, [string_is]);
    let args = ``;
    let v = js_code_call_expression_with_args_code(name, args);
    return v;
    metadata([]);
}