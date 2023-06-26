import { metadata } from '../../../../metadata.mjs';
import { refactor_node_assign_and_replace } from '../../../node/assign/and/replace.mjs';
import { js_node_is_return_statement } from '../../../../js/node/is/return/statement.mjs';
import { js_node_assign_and_replace } from '../../../../js/node/assign/and/replace.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function refactor_object_expression_value_assign(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let lambda_child_get = js_node_assign_and_replace;
    let lambda_node_is_type = js_node_is_return_statement;
    refactor_node_assign_and_replace(args, lambda_node_is_type, lambda_child_get);
    metadata([]);
}