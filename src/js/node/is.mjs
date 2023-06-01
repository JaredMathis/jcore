import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { object_property_exists } from '../../object/property/exists.mjs';
export function js_node_is(candidate) {
    arguments_assert(arguments, [tautology]);
    if (!candidate) {
        return false;
    }
    return object_property_exists(candidate, 'type');
    metadata([]);
}