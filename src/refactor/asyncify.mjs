import { js_node_is_call_expression } from '../js/node/is/call/expression.mjs';
import { js_nodes_get } from '../js/nodes/get.mjs';
import { refactor_async_add } from './async/add.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function refactor_asyncify(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    refactor_async_add(args);
    let calls = js_nodes_get(parsed, js_node_is_call_expression);
}