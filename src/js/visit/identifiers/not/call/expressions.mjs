import { js_visit_identifiers } from '../../../identifiers.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { js_node_is_call_expression } from '../../../../node/is/call/expression.mjs';
import { js_node_is } from '../../../../node/is.mjs';
export function js_visit_identifiers_not_call_expressions(node, lambda) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    js_visit_identifiers(node, v_2);
    function v_2(v) {
        let {parent} = v;
        let v_3 = js_node_is(parent) && js_node_is_call_expression(parent);
        if (v_3) {
            return;
        }
        let {node} = v;
        lambda(node);
    }
}