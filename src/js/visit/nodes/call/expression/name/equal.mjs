import { js_nodes_each } from '../../../../../nodes/each.mjs';
import { arguments_assert_todo } from '../../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { js_node_call_expression_name_equal } from '../../../../../node/call/expression/name/equal.mjs';
export function js_visit_nodes_call_expression_name_equal(parsed, name_expected, lambda) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v_3 = function v(node) {
        let v_2 = js_node_call_expression_name_equal(node, name_expected);
        return v_2;
    };
    js_nodes_each(parsed, v_3, lambda);
}