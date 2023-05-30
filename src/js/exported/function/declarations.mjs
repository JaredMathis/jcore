import { js_node_is_function_declaration } from '../../node/is/function/declaration.mjs';
import { list_filter } from '../../../list/filter.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { list_map } from '../../../list/map.mjs';
import { js_exports } from '../../exports.mjs';
export function js_exported_function_declarations(parsed) {
    let exports = js_exports(parsed);
    let declarations = list_map(exports, function js_export_declaration(e) {
        let d = object_property_get(e, 'declaration');
        return d;
    });
    let filtered = list_filter(declarations, d => js_node_is_function_declaration(d));
    return filtered;
}