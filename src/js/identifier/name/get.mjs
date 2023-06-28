import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { js_node_is_identifier } from '../../node/is/identifier.mjs';
import { assert } from '../../../assert.mjs';
export function js_identifier_name_get(identifier) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v = js_node_is_identifier(identifier);
    assert(v);
    let v_2 = 'name';
    let name = object_property_get(identifier, v_2);
    return name;
    metadata([]);
}