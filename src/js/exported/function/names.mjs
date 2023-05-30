import { list_filter } from '../../../list/filter.mjs';
import { list_map } from '../../../list/map.mjs';
import { assert } from '../../../assert.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { js_body_get } from '../../body/get.mjs';
import { js_node_is_export_named_declaration } from '../../node/is/export/named/declaration.mjs';
import { js_node_is_function_declaration } from '../../node/is/function/declaration.mjs';
import { js_node_is_identifier } from '../../node/is/identifier.mjs';
import { js_exports } from '../../exports.mjs';
export function js_exported_function_names(parsed) {
    let filtered = js_exported_function_declarations(parsed);
    let mapped = list_map(filtered, f => {
        let id = object_property_get(f, 'id');
        assert(js_node_is_identifier(id));
        let name = object_property_get(id, 'name');
        return name;
    });
    return mapped;
}
function js_exported_function_declarations(parsed) {
    let exports = js_exports(parsed);
    let declarations = list_map(exports, e => {
        let d = object_property_get(e, 'declaration');
        return d;
    });
    let filtered = list_filter(declarations, d => js_node_is_function_declaration(d));
    return filtered;
}

