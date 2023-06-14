import { js_identifier_name_get } from '../../../../identifier/name/get.mjs';
import { js_if_identifier_or_null_generic } from '../../../../if/identifier/or/null/generic.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { js_node_is_call_expression } from '../../../../node/is/call/expression.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export function js_call_expression_name_change_try(ce) {
    arguments_assert(arguments, [js_node_is_call_expression]);
    let or_null = true;
    return js_if_identifier_or_null_generic(node, property_name, or_null, lambda);
    function lambda(property) {
        let name = js_identifier_name_get(property);
        return name;
    }
    metadata([]);
}