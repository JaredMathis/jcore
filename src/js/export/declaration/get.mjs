import { js_node_property_declaration } from '../../node/property/declaration.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
export function js_export_declaration_get(e) {
    let d = object_property_get(e, js_node_property_declaration());
    return d;
}