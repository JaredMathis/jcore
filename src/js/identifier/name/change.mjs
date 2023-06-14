import { object_property_get } from '../../../object/property/get.mjs';
import { js_node_is_identifier } from '../../node/is/identifier.mjs';
import { assert } from '../../../assert.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function js_identifier_name_change(identifier) {
    arguments_assert(arguments, [arguments_assert_todo]);
    assert(js_node_is_identifier(identifier));
    let name = object_property_get(identifier, 'name');
    return name;
}