import { js_node_property_callee } from '../../../node/property/callee.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { js_identifier_name_change } from '../../../identifier/name/change.mjs';
import { js_if_identifier_or_null_generic } from '../../../if/identifier/or/null/generic.mjs';
import { metadata } from '../../../../metadata.mjs';
import { js_node_is_call_expression } from '../../../node/is/call/expression.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function js_call_expression_name_change(ce, name_new) {
    arguments_assert(arguments, [
        js_node_is_call_expression,
        arguments_assert_todo
    ]);
    let or_null = false;
    const property_name = js_node_property_callee();
    let v = js_if_identifier_or_null_generic(ce, property_name, or_null, lambda);
    return v;
    function lambda(property) {
        let name = js_identifier_name_change(property, name_new);
        return name;
    }
    metadata([]);
}