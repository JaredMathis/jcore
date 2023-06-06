import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { js_node_is_program } from '../node/is/program.mjs';
export function js_body_get(parsed) {
    arguments_assert(arguments, [js_node_is_program]);
    return object_property_get(parsed, 'body');
    metadata([]);
}