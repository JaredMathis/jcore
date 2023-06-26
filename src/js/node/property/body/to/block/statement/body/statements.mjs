import { metadata } from '../../../../../../../../metadata.mjs';
import { js_node_property_body_get } from '../../../../get.mjs';
import { arguments_assert_todo } from '../../../../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../../../../arguments/assert.mjs';
import { js_block_statement_body } from '../../../../../../../block/statement/body.mjs';
export function js_node_property_body_to_block_statement_body_statements(fd) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let body = js_node_property_body_get(fd);
    let statements = js_block_statement_body(body);
    return statements;
    metadata([]);
}