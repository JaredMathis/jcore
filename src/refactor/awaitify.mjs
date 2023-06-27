import { function_name_async_is } from '../function/name/async/is.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { js_node_is_call_expression } from '../js/node/is/call/expression.mjs';
import { js_visit_nodes_filter_async } from '../js/visit/nodes/filter/async.mjs';
import { js_call_expression_name_get_or_null } from '../js/call/expression/name/get/or/null.mjs';
import { null_is } from '../null/is.mjs';
import { js_node_is_await_expression } from '../js/node/is/await/expression.mjs';
import { list_any } from '../list/any.mjs';
import { js_node_is_arrow_function_expression } from '../js/node/is/arrow/function/expression.mjs';
import { error } from '../error.mjs';
export async function refactor_awaitify(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {parsed} = args;
    await js_visit_nodes_filter_async(parsed, js_node_is_call_expression, async v => {
        let {node, stack, parent} = v;
        if (list_any(stack, js_node_is_arrow_function_expression)) {
            error('must unlambdaify');
        }
        let name = js_call_expression_name_get_or_null(node);
        if (null_is(name)) {
            return;
        }
        if (js_node_is_await_expression(parent)) {
            return;
        }
        if (!await function_name_async_is(name)) {
            return;
        }
    });
}