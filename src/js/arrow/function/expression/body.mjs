import { js_node_is_arrow_function_expression } from '../../../node/is/arrow/function/expression.mjs';
import { js_node_property_body } from '../../../node/property/body.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { assert } from '../../../../assert.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function js_arrow_function_expression_body(function_body) {
    arguments_assert(arguments, [arguments_assert_todo]);
    assert(js_node_is_arrow_function_expression(function_body));
    let body = object_property_get(function_body, js_node_property_body());
    return body;
}