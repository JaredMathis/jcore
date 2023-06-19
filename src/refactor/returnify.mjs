import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { error } from '../error.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { js_visit_nodes_filter } from '../js/visit/nodes/filter.mjs';
import { js_node_is_return_statement } from '../js/node/is/return/statement.mjs';
export function refactor_returnify(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {parsed} = args;
    js_visit_nodes_filter(parsed, js_node_is_return_statement, v => {
        let {node} = v;
    })
}