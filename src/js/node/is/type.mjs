import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
export function js_node_is_type(node, type_expected) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    const type_actual = object_property_get(node, 'type');
    return type_actual === type_expected;
    metadata([]);
}