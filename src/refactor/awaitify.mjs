import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { js_node_is_call_expression } from '../js/node/is/call/expression.mjs';
import { js_visit_nodes_filter_async } from '../js/visit/nodes/filter/async.mjs';
import { js_call_expression_name_get_or_null } from '../js/call/expression/name/get/or/null.mjs';
import { null_is } from '../null/is.mjs';
export async function refactor_awaitify(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {parsed} = args;
    await js_visit_nodes_filter_async(parsed, js_node_is_call_expression, async v => {
        let {node, stack, parent} = v;
        let name = js_call_expression_name_get_or_null(node);
        if (null_is(name)) {
            return;
        }
    });
}