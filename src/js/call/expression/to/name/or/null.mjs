import { metadata } from '../../../../../../metadata.mjs';
import { js_call_expression_to_name_generic } from '../generic.mjs';
import { node_is_type_call_expression } from '../../../../../../node/is/type/call/expression.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
export function js_call_expression_to_name_or_null() {
    arguments_assert(arguments, [node_is_type_call_expression]);
    let or_null = true;
    let name = js_call_expression_to_name_generic(ce, or_null);
    return name;
    metadata([]);
}