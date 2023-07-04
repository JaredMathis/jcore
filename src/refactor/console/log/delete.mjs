import { js_node_property_callee_get } from '../../../js/node/property/callee/get.mjs';
import { js_node_is_member_expression } from '../../../js/node/is/member/expression.mjs';
import { js_node_is_call_expression } from '../../../js/node/is/call/expression.mjs';
import { js_node_property_expression_get } from '../../../js/node/property/expression/get.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { js_visit_nodes_filter } from '../../../js/visit/nodes/filter.mjs';
import { js_node_is_expression_statement } from '../../../js/node/is/expression/statement.mjs';
export function refactor_console_log_delete(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {parsed} = args;
    js_visit_nodes_filter(parsed, js_node_is_expression_statement, function v_2(v) {
        let {node} = v;
        let expression = js_node_property_expression_get(node);
        if (js_node_is_call_expression(expression)) {
            let callee = js_node_property_callee_get(node);
            if (js_node_is_member_expression(callee)) {
            }
        }
    });
}