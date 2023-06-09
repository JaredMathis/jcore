import { metadata } from '../../../metadata.mjs';
import { js_node_is_identifier } from '../../node/is/identifier.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { object_property_change } from '../../../object/property/change.mjs';
export function js_identifier_name_change(identifier, name_new) {
    arguments_assert(arguments, [
        js_node_is_identifier,
        arguments_assert_todo
    ]);
    let v = 'name';
    object_property_change(identifier, v, name_new);
    metadata([]);
}