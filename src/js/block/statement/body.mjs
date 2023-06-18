import { js_node_property_body } from '../../node/property/body.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { js_node_is_block_statement } from '../../node/is/block/statement.mjs';
import { assert } from '../../../assert.mjs';
export function js_block_statement_body(function_body) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v = js_node_is_block_statement(function_body);
    assert(v);
    let v_2 = js_node_property_body();
    let body = object_property_get(function_body, v_2);
    return body;
}