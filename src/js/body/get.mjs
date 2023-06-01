import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { object_property_get } from '../../object/property/get.mjs';
export function js_body_get(parsed) {
    arguments_assert(arguments, [tautology]);
    return object_property_get(parsed, 'body');
    metadata([]);
}