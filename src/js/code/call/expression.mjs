import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_code_call_expression_with_args } from './expression/with/args.mjs';
export function js_code_call_expression(name) {
    arguments_assert(arguments, [tautology]);
    let args = ``;
    return js_code_call_expression_with_args(name, args);
    metadata([]);
}