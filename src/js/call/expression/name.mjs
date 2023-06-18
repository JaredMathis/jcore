import { boolean_is } from '../../../boolean/is.mjs';
import { js_node_is_call_expression } from '../../node/is/call/expression.mjs';
import { js_call_expression_name_generic } from './name/generic.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function js_call_expression_name(ce, or_null) {
    arguments_assert(arguments, [
        js_node_is_call_expression,
        boolean_is
    ]);
    let result = js_call_expression_name_generic(ce, or_null);
    return result;
}