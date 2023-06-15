import { js_node_is_arrow_function_expression } from '../js/node/is/arrow/function/expression.mjs';
import { js_nodes_each } from '../js/nodes/each.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { error } from '../error.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function refactor_unlambdaify(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    js_nodes_each(parsed, js_node_is_arrow_function_expression, lambda);
    error('todo: refactor_unlambdaify');
}