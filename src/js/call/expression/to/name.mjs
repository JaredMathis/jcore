import { tautology } from '../../../../tautology.mjs';
import { js_call_expression_to_name_generic } from './name/generic.mjs';
import { metadata } from '../../../../metadata.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { node_is_call_expression } from '../../../../node/is/call/expression.mjs';
export function js_call_expression_to_name(ce) {
    arguments_assert(arguments, [tautology]);
    arguments_assert(arguments, [node_is_call_expression]);
    let or_null = false;
    let name = js_call_expression_to_name_generic(ce, or_null);
    return name;
    metadata([]);
}