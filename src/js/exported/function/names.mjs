import { array_filter } from '../../../array/filter.mjs';
import { array_map } from '../../../array/map.mjs';
import { assert } from '../../../assert.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { js_body_get } from '../../body/get.mjs';
import { js_node_is_export_named_declaration } from '../../node/is/export/named/declaration.mjs';
import { js_node_is_function_declaration } from '../../node/is/function/declaration.mjs';
import { js_node_is_identifier } from '../../node/is/identifier.mjs';
export function js_exported_function_names(parsed) {
    let body = js_body_get(parsed);
    let exports = array_filter(body, b => js_node_is_export_named_declaration(b));
    let declarations = array_map(exports, e => {
        let d = object_property_get(e, 'declaration');
        return d;
    });
    let filtered = array_filter(declarations, d => js_node_is_function_declaration(d));
    let mapped = array_map(filtered, f => {
        let id = object_property_get(f, 'id');
        assert(js_node_is_identifier(id));
        let name = object_property_get(id, 'name');
        return name;
    });
    return mapped;
}