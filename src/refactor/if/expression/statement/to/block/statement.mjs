import { js_node_is_if_statement } from '../../../../../../js/node/is/if/statement.mjs';
import { arguments_assert_todo } from '../../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { js_nodes_each } from '../../../../../../js/nodes/each.mjs';
export function refactor_if_expression_statement_to_block_statement(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {parsed} = args;
    js_nodes_each(parsed, js_node_is_if_statement, node => {
    });
}