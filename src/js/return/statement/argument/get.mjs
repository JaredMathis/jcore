import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_node_is_return_statement } from '../../../node/is/return/statement.mjs';
import { assert } from '../../../../assert.mjs';
import { js_node_property_argument_get } from '../../../node/property/argument/get.mjs';
export function js_return_statement_argument_get(object) {
    arguments_assert(arguments, [arguments_assert_todo]);
    assert(js_node_is_return_statement(object));
    let arg = js_node_property_argument_get(object);
    return arg;
}