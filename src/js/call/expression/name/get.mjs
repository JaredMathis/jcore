import { js_node_is_call_expression } from '../../../node/is/call/expression.mjs';
import { js_call_expression_name_generic } from './generic.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function js_call_expression_name_get(ce) {
    arguments_assert(arguments, [js_node_is_call_expression]);
    let result = js_call_expression_name_generic(ce, false);
    return result;
}