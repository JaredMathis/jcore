import { js_node_property_argument } from '../../../node/property/argument.mjs';
import { js_node_is_return_statement } from '../../../node/is/return/statement.mjs';
import { assert } from '../../../../assert.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { object_property_change } from '../../../../object/property/change.mjs';
export function js_return_statement_argument_change(object, value) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    assert(js_node_is_return_statement(object));
    let arg = object_property_change(object, js_node_property_argument(), value);
    return arg;
}