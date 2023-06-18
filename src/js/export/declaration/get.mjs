import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_node_property_declaration } from '../../node/property/declaration.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { js_node_is } from '../../node/is.mjs';
export function js_export_declaration_get(e) {
    arguments_assert(arguments, [js_node_is]);
    let v = js_node_property_declaration();
    let d = object_property_get(e, v);
    return d;
    metadata([]);
}