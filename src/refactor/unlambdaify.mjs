import { metadata } from '../metadata.mjs';
import { js_identifier_name_next } from '../js/identifier/name/next.mjs';
import { js_arrow_function_expression_functionify } from '../js/arrow/function/expression/functionify.mjs';
import { js_node_is_arrow_function_expression } from '../js/node/is/arrow/function/expression.mjs';
import { js_nodes_each } from '../js/nodes/each.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function refactor_unlambdaify(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {parsed} = args;
    js_nodes_each(parsed, js_node_is_arrow_function_expression, function v(n) {
        let v_2 = js_identifier_name_next(parsed);
        let v_3 = js_arrow_function_expression_functionify(n, v_2);
        return v_3;
    });
    metadata([]);
}