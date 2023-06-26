import { boolean_value_false } from '../../../../../boolean/value/false.mjs';
import { js_call_expression_name_generic } from '../../../../call/expression/name/generic.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { js_node_is_call_expression } from '../../../../node/is/call/expression.mjs';
export function js_find_call_expressions_to_name(ce) {
    arguments_assert(arguments, [js_node_is_call_expression]);
    let or_null = boolean_value_false();
    let name = js_call_expression_name_generic(ce, or_null);
    return name;
    metadata([]);
}