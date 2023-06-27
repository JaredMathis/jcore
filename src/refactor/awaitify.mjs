import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { js_visit_nodes_filter } from '../js/visit/nodes/filter.mjs';
import { js_node_is_call_expression } from '../js/node/is/call/expression.mjs';
export function refactor_awaitify(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {parsed} = args;
    js_visit_nodes_filter(parsed, js_node_is_call_expression, v => {
        let {node, stack, parent} = v;
    });
}