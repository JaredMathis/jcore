import { boolean_value_false } from '../../../boolean/value/false.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_if_identifier_then_name_or_null } from '../../if/identifier/then/name/or/null.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function js_property_identifier_name(node, property_name) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v = boolean_value_false();
    let result = js_if_identifier_then_name_or_null(node, property_name, v);
    return result;
    metadata([]);
}