import { metadata } from '../../../../metadata.mjs';
import { js_node_is_await_expression } from '../../../node/is/await/expression.mjs';
import { js_node_property_argument } from '../../../node/property/argument.mjs';
import { object_property_change } from '../../../../object/property/change.mjs';
import { assert } from '../../../../assert.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function js_await_expression_argument_change(object, value) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v = js_node_is_await_expression(object);
    assert(v);
    let v_2 = js_node_property_argument();
    let arg = object_property_change(object, v_2, value);
    return arg;
    metadata([]);
}