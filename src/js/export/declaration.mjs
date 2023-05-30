import { object_property_get } from '../../object/property/get.mjs';
export function js_export_declaration(e) {
    let d = object_property_get(e, 'declaration');
    return d;
}