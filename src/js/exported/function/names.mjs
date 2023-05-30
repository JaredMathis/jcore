import { js_exported_function_declarations } from './declarations.mjs';
import { list_map } from '../../../list/map.mjs';
import { assert } from '../../../assert.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { js_node_is_identifier } from '../../node/is/identifier.mjs';
export function js_exported_function_names(parsed) {
    let filtered = js_exported_function_declarations(parsed);
    let mapped = list_map(filtered, function (f) {
        let id = object_property_get(f, 'id');
        assert(js_node_is_identifier(id));
        let name = object_property_get(id, 'name');
        return name;
    });
    return mapped;
}