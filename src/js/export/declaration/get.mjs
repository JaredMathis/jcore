import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_node_property_declaration } from '../../node/property/declaration.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { js_node_is } from '../../node/is.mjs';
export function js_export_declaration_get(e) {
    arguments_assert(arguments, [js_node_is]);
    let d = object_property_get(e, js_node_property_declaration());
    return d;
    metadata([]);
}